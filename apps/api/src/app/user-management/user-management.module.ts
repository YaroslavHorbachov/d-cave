import { Module } from '@nestjs/common';
import { DBModule } from '../db/db.module';
import { UsersModule } from '../users/users.module';
import { UserManagementController } from './controllers';
import { UserManagementService } from './services';

@Module({
    imports: [UsersModule, DBModule],
    controllers: [UserManagementController],
    providers: [UserManagementService],
})
export class UserManagementModule {}
