import { CampaignDTO, CreateCampaignDTO, UpdateCampaignDTO } from '@d-cave/api-interfaces';
import { Body, Controller, Delete, Get, Patch, Post } from '@nestjs/common';
import { ApiBearerAuth, ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { MasterRole, User } from '../../auth/decorators';
import { RequestUser } from '../../auth/interfaces';
import { BadRequestResponse, NotFoundResponse, ObjectIdParam } from '../../shared/decorators';
import { MastersCampaignsService } from '../services/masters-campaigns.service';

@ApiBearerAuth()
@ApiTags('masters-campaigns')
@Controller('campaigns')
export class MastersCampaignsController {
    constructor(private readonly mastersCampaignsService: MastersCampaignsService) {}

    @MasterRole
    @Get()
    @ApiOkResponse({
        type: CampaignDTO,
        isArray: true,
    })
    public getAll(@User() user: RequestUser) {
        return this.mastersCampaignsService.getAll(user.id);
    }

    @MasterRole
    @Post()
    @BadRequestResponse()
    @ApiCreatedResponse()
    public create(@User() user: RequestUser, @Body() body: CreateCampaignDTO) {
        return this.mastersCampaignsService.create(user.id, body);
    }

    @MasterRole
    @Patch(':campaignId')
    @BadRequestResponse()
    @ApiOkResponse()
    public update(
        @User() user: RequestUser,
        @ObjectIdParam('campaignId') campaignId: string,
        @Body() body: UpdateCampaignDTO
    ) {
        return this.mastersCampaignsService.update(user.id, campaignId, body);
    }

    @MasterRole
    @Delete(':campaignId')
    @ApiOkResponse()
    @NotFoundResponse
    @BadRequestResponse()
    public delete(@User() user: RequestUser, @ObjectIdParam('campaignId') campaignId: string) {
        return this.mastersCampaignsService.delete(user.id, campaignId);
    }
}
