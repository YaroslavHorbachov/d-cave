import { CAMPAIGN_CONSTANTS } from '@d-cave/shared';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsNotEmpty, MaxLength, MinLength } from 'class-validator';

export class CreateCampaignDTO {
    @ApiProperty({ example: 'My First Campaign', description: 'The name of the game campaign' })
    @IsNotEmpty()
    @MinLength(CAMPAIGN_CONSTANTS.MIN_NAME_LENGTH)
    @MaxLength(CAMPAIGN_CONSTANTS.MAX_NAME_LENGTH)
    public readonly name: string;

    @ApiPropertyOptional({
        example: 'D&D Dragonlord Campaign',
        description: 'The brief description about campaign',
    })
    @MinLength(CAMPAIGN_CONSTANTS.MIN_DESCRIPTION_LENGTH)
    @MaxLength(CAMPAIGN_CONSTANTS.MAX_DESCRIPTION_LENGTH)
    public readonly description?: string;
}
