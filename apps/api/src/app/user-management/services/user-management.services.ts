import { UpdateUserDTO, UserDTO } from '@d-cave/api-interfaces';
import { Injectable } from '@nestjs/common';
import { UserDocument } from '../../users/schemas';
import { UsersService } from '../../users/services';

@Injectable()
export class UserManagementService {
    constructor(private readonly usersService: UsersService) {}

    public async getAll(): Promise<UserDTO[]> {
        const users = await this.usersService.getAll();
        const models = users.map((user) => this.mapToUserDTO(user));

        return models;
    }

    public activate(id: string) {
        return this.usersService.activateById(id);
    }

    public terminate(id: string) {
        return this.usersService.terminateById(id);
    }

    public update(id: string, model: UpdateUserDTO) {
        return this.usersService.update(id, model);
    }

    private mapToUserDTO(user: UserDocument): UserDTO {
        const { name, status, role, id, displayName } = user;

        return { name, status, role, id, displayName };
    }
}
