import { ApiProperty } from '@nestjs/swagger';
import { RegisterUserDTO } from './register-user.dto';

export class LoginDTO extends RegisterUserDTO {}

export class LoginResponseDTO {
    @ApiProperty({ example: 'ixc.ad', description: 'Bearer token value˚' })
    public readonly accessToken: string;
}
