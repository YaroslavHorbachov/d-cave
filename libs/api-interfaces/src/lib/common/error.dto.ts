import { ApiProperty } from '@nestjs/swagger';

export class UnauthorizedDTO {
    @ApiProperty({ example: 401 })
    public readonly status: number;

    @ApiProperty({ example: 'Unauthorized' })
    public readonly message: string;
}

export class BadRequestErrorDTO {
    @ApiProperty({ example: 400 })
    public readonly status: number;

    @ApiProperty({ example: 'Bad Request' })
    public readonly error: string;

    @ApiProperty({ example: ['name must be longer than or equal to 2 characters'] })
    public readonly message: string[];
}

export class NotFoundErrorDTO {
    @ApiProperty({ example: 404 })
    public readonly status: number;

    @ApiProperty({ example: 'Not Found' })
    public readonly error: string;

    @ApiProperty({ example: 'Campaing not found' })
    public readonly message: string;
}
