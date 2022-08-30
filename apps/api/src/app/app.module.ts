import { Module, ValidationPipe } from '@nestjs/common';
import { APP_PIPE } from '@nestjs/core';
import { MongooseModule } from '@nestjs/mongoose';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from './auth/auth.module';
import { CampaignsModule } from './campaigns/campaigns.module';
import { UserManagementModule } from './user-management/user-management.module';
import { UsersModule } from './users/users.module';

@Module({
    imports: [
        MongooseModule.forRoot(environment.mongoURI, {
            dbName: environment.mongoDBName,
        }),
        UsersModule,
        AuthModule,
        CampaignsModule,
        UserManagementModule,
        AppRoutingModule,
    ],
    controllers: [],
    providers: [
        {
            provide: APP_PIPE,
            useClass: ValidationPipe,
        },
    ],
})
export class AppModule {}
