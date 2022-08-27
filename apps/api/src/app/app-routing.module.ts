import { Module } from '@nestjs/common';
import { RouterModule, Routes } from '@nestjs/core';
import { AuthModule } from './auth/auth.module';
import { CampaignsModule } from './campaigns/campaigns.module';
import { EventsModule } from './events/events.module';
import { MastersModule } from './masters/masters.module';
import { PlayersModule } from './players/players.module';
import { UserManagementModule } from './user-management/user-management.module';
import { UsersModule } from './users/users.module';

const routes: Routes = [
    { path: 'auth', module: AuthModule },
    { path: 'users', module: UsersModule },
    { path: 'masters', module: MastersModule },
    { path: 'players', module: PlayersModule },
    { path: 'campaigns', module: CampaignsModule },
    { path: 'events', module: EventsModule },
    {
        path: 'admin',
        children: [{ path: 'user-management', module: UserManagementModule }],
    },
];

@Module({
    imports: [RouterModule.register(routes)],
})
export class AppRoutingModule {}
