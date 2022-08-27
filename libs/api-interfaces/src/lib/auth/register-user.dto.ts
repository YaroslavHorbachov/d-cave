import { USER_CONSTANTS } from '@d-cave/shared';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, MaxLength, MinLength } from 'class-validator';
import { CreateUser } from '../user';

export class RegisterUserDTO implements CreateUser {
    @ApiProperty({ example: 'Tom' })
    @IsNotEmpty()
    @MinLength(USER_CONSTANTS.MIN_NAME_LENGTH)
    @MaxLength(USER_CONSTANTS.MAX_NAME_LENGTH)
    public readonly name: string;

    @ApiProperty({ example: 'tomsBestPassword' })
    @IsNotEmpty()
    @MinLength(USER_CONSTANTS.MIN_PASSWORD_LENGTH)
    @MaxLength(USER_CONSTANTS.MAX_PASSWORD_LENGTH)
    public readonly password: string;

    // TODO: Include other user details
}
