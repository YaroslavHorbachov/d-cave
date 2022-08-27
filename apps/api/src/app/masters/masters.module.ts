import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CampaignsModule } from '../campaigns/campaigns.module';
import { MastersCampaignsController } from './controllers';
import { Master, MasterSchema } from './schemas';
import { MastersService } from './services';
import { MastersCampaignsService } from './services/masters-campaigns.service';

@Module({
    controllers: [MastersCampaignsController],
    providers: [MastersService, MastersCampaignsService],
    imports: [
        MongooseModule.forFeature([{ name: Master.name, schema: MasterSchema }]),
        CampaignsModule,
    ],
    exports: [MastersService],
})
export class MastersModule {}
