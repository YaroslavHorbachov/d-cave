import { CampaignDTO } from '@d-cave/api-interfaces';
import { Controller, Get } from '@nestjs/common';
import { ApiBearerAuth, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { AdminRole } from '../../auth/decorators/admin.decorator';
import { CampaignsService } from '../services';

@ApiBearerAuth()
@ApiTags('campaigns')
@Controller()
export class CampaignsController {
    constructor(private readonly campaignsService: CampaignsService) {}

    @AdminRole
    @Get()
    @ApiOkResponse({
        type: CampaignDTO,
        isArray: true,
    })
    public getAll() {
        return this.campaignsService.getAll();
    }
}
