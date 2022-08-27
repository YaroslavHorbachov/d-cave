import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
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
    ],
    providers: [CampaignsSchemaService, CampaignsService, CampaignsUtilsService],
    exports: [CampaignsSchemaService, CampaignsUtilsService],
})
export class CampaignsModule {}
