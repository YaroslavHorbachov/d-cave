import { Injectable } from '@nestjs/common';
import { CampaignsService } from '../../campaigns/services';
import { MastersSchemaService } from '../../db/services';
import { MastersUtilsService } from './masters-utils.service';

@Injectable()
export class MastersService {
    constructor(
        private readonly mastersSchemaService: MastersSchemaService,
        private readonly campaignsService: CampaignsService,
        private readonly mastersUtilsService: MastersUtilsService
    ) {}

    public async getAll() {
        const masters = await this.mastersSchemaService.getAll();

        return this.mastersUtilsService.mapMany(masters);
    }

    public async removeByUserId(userId: string) {
        await Promise.all([
            this.mastersSchemaService.removeByUserId(userId),
            this.campaignsService.removeByMasterId(userId),
        ]);
    }
}
