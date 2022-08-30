import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CampaignsModule } from '../campaigns/campaigns.module';
import { MastersCampaignsController, MastersController } from './controllers';
import { Master, MasterSchema } from './schemas';
import { MastersSchemaService, MastersService } from './services';
import { MastersCampaignsService } from './services/masters-campaigns.service';
import { MastersUtilsService } from './services/masters-utils.service';

@Module({
    controllers: [MastersCampaignsController, MastersController],
    providers: [MastersSchemaService, MastersCampaignsService, MastersService, MastersUtilsService],
    imports: [
        MongooseModule.forFeature([{ name: Master.name, schema: MasterSchema }]),
        CampaignsModule,
    ],
    exports: [MastersSchemaService, MastersService],
})
export class MastersModule {}
