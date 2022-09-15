import { Injectable } from '@nestjs/common';
import { CampaignsSchemaService } from './campaigns-schema.service';
import { ChangelogService } from './changelog.service';
import { EventSchemaService } from './event-schema.service';
import { MastersSchemaService } from './masters-schema.service';
import { PlayersSchemaService } from './players-schema.service';
import { UsersSchemaService } from './users-schema.service';

@Injectable()
export class DbService {
    constructor(
        private readonly campaignsSchemaService: CampaignsSchemaService,
        private readonly eventSchemaService: EventSchemaService,
        private readonly mastersSchemaService: MastersSchemaService,
        private readonly playersSchemaService: PlayersSchemaService,
        private readonly usersSchemaService: UsersSchemaService,
        private readonly changelogService: ChangelogService
    ) {}

    public async cleanAll() {
        const cleanupCalls = [
            this.campaignsSchemaService,
            this.eventSchemaService,
            this.mastersSchemaService,
            this.playersSchemaService,
            this.usersSchemaService,
            this.changelogService,
        ].map((service) => service.removeAll.call(service));

        await Promise.all(cleanupCalls);
    }

    // TODO: Add Migrations service
}
