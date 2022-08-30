import { ApiProperty } from '@nestjs/swagger';

export class MasterDTO {
    @ApiProperty({ example: 'uc.txt' })
    public readonly id: string; 
    
    @ApiProperty({ example: 'uc.txt' })
    public readonly userId: string;

    @ApiProperty({ example: ['uc.txt'] })
    public readonly campaignsIds: string[];
}
