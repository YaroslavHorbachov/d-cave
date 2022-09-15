import { Module } from '@nestjs/common';
import { CampaignsModule } from '../campaigns/campaigns.module';
import { DBModule } from '../db/db.module';
import { MastersCampaignsController, MastersController } from './controllers';
import { MastersService } from './services';
import { MastersCampaignsService } from './services/masters-campaigns.service';
import { MastersUtilsService } from './services/masters-utils.service';

@Module({
    controllers: [MastersCampaignsController, MastersController],
    providers: [MastersCampaignsService, MastersService, MastersUtilsService],
    imports: [CampaignsModule, MastersModule, DBModule],
    exports: [MastersService],
})
export class MastersModule {}
