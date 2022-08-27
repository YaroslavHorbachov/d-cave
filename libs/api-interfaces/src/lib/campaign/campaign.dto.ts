import { ApiProperty } from '@nestjs/swagger';

export class CampaingPlayerDTO {
    @ApiProperty()
    public readonly id: string;

    @ApiProperty()
    public readonly name: string;
}

export class CampaignDTO {
    @ApiProperty()
    public readonly id: string;

    @ApiProperty()
    public readonly name: string;

    @ApiProperty({ type: CampaingPlayerDTO, isArray: true })
    public readonly players: CampaingPlayerDTO[];

    @ApiProperty()
    public readonly description?: string;
}
