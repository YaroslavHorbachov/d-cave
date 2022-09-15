import { Module } from '@nestjs/common';
import { DBModule } from '../db/db.module';
import { PlayersController } from './controllers/players.controller';
import { PlayersService } from './services/players.service';

@Module({
    imports: [DBModule],
    providers: [PlayersService],
    controllers: [PlayersController],
    exports: [PlayersService],
})
export class PlayersModule {}
