import { Module } from '@nestjs/common';
import { MastersModule } from '../masters/masters.module';
import { UsersModule } from '../users/users.module';
import { UserManagementController } from './controllers';
import { UserManagementService } from './services';

@Module({
    imports: [UsersModule, MastersModule],
    controllers: [UserManagementController],
    providers: [UserManagementService],
})
export class UserManagementModule {}
