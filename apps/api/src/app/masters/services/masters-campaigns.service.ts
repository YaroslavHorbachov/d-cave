import { CreateCampaignDTO, UpdateCampaignDTO } from '@d-cave/api-interfaces';
import { Injectable } from '@nestjs/common';
import { CampaignsSchemaService } from '../../campaigns/services';
import { CampaignsUtilsService } from '../../campaigns/services/campaigns-utils.service';
import { MastersService } from './masters.service';

@Injectable()
export class MastersCampaignsService {
    constructor(
        private readonly campaignsSchemaService: CampaignsSchemaService,
        private readonly campaignsUtilsService: CampaignsUtilsService,
        private readonly mastersService: MastersService
    ) {}

    public async getAll(userId: string) {
        const campaings = await this.campaignsSchemaService.getAllByUserId(userId);

        return this.campaignsUtilsService.mapMany(campaings);
    }

    public async create(userId: string, model: CreateCampaignDTO) {
        const campaign = await this.campaignsSchemaService.create(userId, model);

        await this.mastersService.addCampaign(userId, campaign);
    }

    public async update(userId: string, campaignId: string, model: UpdateCampaignDTO) {
        await this.campaignsSchemaService.update(userId, campaignId, model);
    }

    public async delete(userId: string, campaignId: string) {
        await this.campaignsSchemaService.delete(userId, campaignId);

        await this.mastersService.removeCampaign(userId, campaignId);
    }
}
