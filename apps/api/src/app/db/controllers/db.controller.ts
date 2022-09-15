import { Controller, HttpCode, Post } from '@nestjs/common';
import { ApiBearerAuth, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { AdminRole } from '../../auth/decorators/admin.decorator';
import { Auth } from '../../auth/decorators/auth.decorator';
import { DbService } from '../services';

@ApiBearerAuth()
@ApiTags('test-db')
@Controller()
export class DbController {
    constructor(private readonly dbService: DbService) {}

    @Auth
    @AdminRole
    @HttpCode(200)
    @ApiOkResponse()
    @Post('clear-all')
    public clearAll() {
        return this.dbService.cleanAll();
    }
}
