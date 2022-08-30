import { MasterDTO } from '@d-cave/api-interfaces';
import { Controller, Get } from '@nestjs/common';
import { ApiBearerAuth, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { AdminRole } from '../../auth/decorators/admin.decorator';
import { MastersService } from '../services';

@ApiBearerAuth()
@ApiTags('masters')
@Controller()
export class MastersController {
    constructor(private readonly mastersService: MastersService) {}

    @AdminRole
    @Get()
    @ApiOkResponse({ type: MasterDTO, isArray: true })
    public getAll() {
        return this.mastersService.getAll();
    }
}
