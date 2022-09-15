import { Module } from '@nestjs/common';
import { DBModule } from '../db/db.module';
import { MastersModule } from '../masters/masters.module';
import { PlayersModule } from '../players/players.module';
import { UsersService } from './services';

@Module({
    imports: [MastersModule, PlayersModule, DBModule],
    providers: [UsersService],
    exports: [UsersService],
})
export class UsersModule {}
