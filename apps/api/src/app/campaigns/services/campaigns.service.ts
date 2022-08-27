import { Injectable } from '@nestjs/common';
import { CampaignsSchemaService } from './campaigns-schema.service';
import { CampaignsUtilsService } from './campaigns-utils.service';

@Injectable()
export class CampaignsService {
    constructor(
        private readonly campaignsUtilsService: CampaignsUtilsService,
        private readonly campaignsSchemaService: CampaignsSchemaService
    ) {}

    public async getAll() {
        const allCampaigns = await this.campaignsSchemaService.getAll();

        return this.campaignsUtilsService.mapMany(allCampaigns);
    }
}
