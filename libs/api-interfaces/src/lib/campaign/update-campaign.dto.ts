import { CAMPAIGN_CONSTANTS } from '@d-cave/shared';
import { ApiPropertyOptional } from '@nestjs/swagger';
import { MaxLength, MinLength } from 'class-validator';

export class UpdateCampaignDTO {
    @ApiPropertyOptional({
        example: 'D&D Dragonlord Campaign',
        description: 'The brief description about campaign',
    })
    @MinLength(CAMPAIGN_CONSTANTS.MIN_DESCRIPTION_LENGTH)
    @MaxLength(CAMPAIGN_CONSTANTS.MAX_DESCRIPTION_LENGTH)
    public readonly description?: string;

    @ApiPropertyOptional({ example: ['0-0-0-0'], description: 'The list of players ids' })
    public readonly players?: string[];
}
