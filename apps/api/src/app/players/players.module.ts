import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PlayersController } from './controllers/players.controller';
import { Player, PlayerSchema } from './schemas/player.schema';
import { PlayersService } from './services/players.schema';

@Module({
    imports: [MongooseModule.forFeature([{ name: Player.name, schema: PlayerSchema }])],
    providers: [PlayersService],
    controllers: [PlayersController],
    exports: [],
})
export class PlayersModule {}
