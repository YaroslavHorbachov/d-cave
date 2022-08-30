import { UpdateUserDTO, UserDTO } from '@d-cave/api-interfaces';
import { Injectable } from '@nestjs/common';
import { UserDocument } from '../../users/schemas';
import { UsersSchemaService } from '../../users/services';
import { UsersService } from '../../users/services/users.service';

@Injectable()
export class UserManagementService {
    constructor(
        private readonly usersSchemaService: UsersSchemaService,
        private readonly usersService: UsersService
    ) {}

    public async getAll(): Promise<UserDTO[]> {
        const users = await this.usersSchemaService.getAll();
        const models = users.map((user) => this.mapToUserDTO(user));

        return models;
    }

    public activate(id: string) {
        return this.usersSchemaService.activateById(id);
    }

    public terminate(id: string) {
        return this.usersSchemaService.terminateById(id);
    }

    public update(id: string, model: UpdateUserDTO) {
        return this.usersSchemaService.update(id, model);
    }

    public remove(id: string) {
        return this.usersService.remove(id);
    }

    private mapToUserDTO(user: UserDocument): UserDTO {
        const { name, status, role, id, displayName } = user;

        return { name, status, role, id, displayName };
    }
}
