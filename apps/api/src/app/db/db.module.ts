import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { environment } from '../../environments/environment';
import { DbController } from './controllers/db.controller';
import {
    Campaign,
    CampaignSchema,
    EventSchema,
    Master,
    MasterSchema,
    Player,
    PlayerSchema,
    User,
    UserSchema
} from './schemas';
import {
    CampaignsSchemaService, ChangelogService, DbService,
    EventSchemaService,
    MastersSchemaService,
    PlayersSchemaService,
    UsersSchemaService
} from './services';

const schemaServices = [
    CampaignsSchemaService,
    EventSchemaService,
    MastersSchemaService,
    PlayersSchemaService,
    UsersSchemaService,
];

@Module({
    controllers: [DbController],
    imports: [
        MongooseModule.forRoot(environment.mongoURI, {
            dbName: environment.mongoDBName,
        }),
        MongooseModule.forFeature([
            { name: User.name, schema: UserSchema },
            { name: Player.name, schema: PlayerSchema },
            { name: Master.name, schema: MasterSchema },
            { name: Campaign.name, schema: CampaignSchema },
            { name: Event.name, schema: EventSchema },
        ]),
    ],
    providers: [...schemaServices, DbService, ChangelogService],
    exports: [...schemaServices],
})
export class DBModule {}
