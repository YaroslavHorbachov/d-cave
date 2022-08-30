import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MastersModule } from '../masters/masters.module';
import { PlayersModule } from '../players/players.module';
import { User, UserSchema } from './schemas';
import { UsersSchemaService, UsersService } from './services';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
        MastersModule,
        PlayersModule,
    ],
    providers: [UsersSchemaService, UsersService],
    exports: [UsersSchemaService, UsersService],
})
export class UsersModule {}
