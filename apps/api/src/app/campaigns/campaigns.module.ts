import { Module } from '@nestjs/common';
import { DBModule } from '../db/db.module';
import { PlayersModule } from '../players/players.module';
import { CampaignsController } from './controllers';
import { CampaignsService, CampaignsUtilsService } from './services';

@Module({
    controllers: [CampaignsController],
    imports: [PlayersModule, DBModule],
    providers: [CampaignsService, CampaignsUtilsService],
    exports: [CampaignsService, CampaignsUtilsService],
})
export class CampaignsModule {}
