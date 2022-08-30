import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PlayersModule } from '../players/players.module';
import { CampaignsController } from './controllers';
import { Campaign, CampaignSchema } from './schemas';
import { CampaignsSchemaService, CampaignsService, CampaignsUtilsService } from './services';

@Module({
    controllers: [CampaignsController],
    imports: [
        MongooseModule.forFeature([
            {
                name: Campaign.name,
                schema: CampaignSchema,
            },
        ]),
        PlayersModule
    ],
    providers: [CampaignsSchemaService, CampaignsService, CampaignsUtilsService],
    exports: [CampaignsSchemaService, CampaignsService, CampaignsUtilsService],
})
export class CampaignsModule {}
