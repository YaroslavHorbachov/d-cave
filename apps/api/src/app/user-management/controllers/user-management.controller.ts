import { UpdateUserDTO, UserDTO } from '@d-cave/api-interfaces';
import { Body, Controller, Get, Patch } from '@nestjs/common';
import { ApiBearerAuth, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { AdminRole } from '../../auth/decorators/admin.decorator';
import { ObjectIdParam } from '../../shared/decorators';
import { UserManagementService } from '../services/user-management.services';

@Controller()
@ApiTags('user-management')
@ApiBearerAuth()
export class UserManagementController {
    constructor(private readonly userManagementService: UserManagementService) {}

    @AdminRole
    @Get()
    @ApiOkResponse({ type: UserDTO, isArray: true })
    public getAll() {
        return this.userManagementService.getAll();
    }

    @AdminRole
    @Patch(':id/activate')
    @ApiOkResponse()
    public async activate(@ObjectIdParam('id') id: string) {
        await this.userManagementService.activate(id);
    }

    @AdminRole
    @Patch(':id/terminate')
    @ApiOkResponse()
    public async terminate(@ObjectIdParam('id') id: string) {
        await this.userManagementService.terminate(id);
    }

    @AdminRole
    @Patch(':id')
    @ApiOkResponse()
    public async update(@ObjectIdParam('id') id: string, @Body() body: UpdateUserDTO) {
        await this.userManagementService.update(id, body);
    }
}
