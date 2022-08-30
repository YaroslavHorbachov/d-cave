import { UserRoles } from '@d-cave/shared';
import { Injectable } from '@nestjs/common';
import { MastersService } from '../../masters/services';
import { PlayersService } from '../../players/services';
import { UsersSchemaService } from './users-schema.service';

@Injectable()
export class UsersService {
    constructor(
        private readonly usersSchemaService: UsersSchemaService,
        private readonly mastersService: MastersService,
        private readonly playersService: PlayersService
    ) {}

    public async remove(id: string) {
        const user = await this.usersSchemaService.remove(id);

        switch (user.role) {
            case UserRoles.Master: {
                await this.mastersService.removeByUserId(id);

                break;
            }

            case UserRoles.Player: {
                await this.playersService.removeByUserId(id);

                break;
            }
        }
    }
}
