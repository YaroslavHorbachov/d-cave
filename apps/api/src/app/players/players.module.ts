import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PlayersController } from './controllers/players.controller';
import { Player, PlayerSchema } from './schemas/player.schema';
import { PlayersSchemaService } from './services/players-schema.service';
import { PlayersService } from './services/players.service';

@Module({
    imports: [MongooseModule.forFeature([{ name: Player.name, schema: PlayerSchema }])],
    providers: [PlayersService, PlayersSchemaService],
    controllers: [PlayersController],
    exports: [PlayersService, PlayersSchemaService],
})
export class PlayersModule {}
