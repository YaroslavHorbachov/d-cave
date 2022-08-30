import { Injectable } from '@nestjs/common';
import { PlayersService } from '../../players/services/players.service';
import { CampaignsSchemaService } from './campaigns-schema.service';
import { CampaignsUtilsService } from './campaigns-utils.service';

@Injectable()
export class CampaignsService {
    constructor(
        private readonly campaignsUtilsService: CampaignsUtilsService,
        private readonly campaignsSchemaService: CampaignsSchemaService,
        private readonly playersService: PlayersService
    ) {}

    public async getAll() {
        const allCampaigns = await this.campaignsSchemaService.getAll();

        return this.campaignsUtilsService.mapMany(allCampaigns);
    }

    public async removeByMasterId(userId: string) {
        const campaigns = await this.campaignsSchemaService.removeByMasterId(userId);
        const campaignsIds = campaigns.map((campaign) => campaign.id);

        await this.playersService.removeByCampaingsIds(campaignsIds);
    }
}
