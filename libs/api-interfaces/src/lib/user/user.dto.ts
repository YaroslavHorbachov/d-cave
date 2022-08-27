import { UserRoles, UserStatuses } from '@d-cave/shared';
import { ApiProperty } from '@nestjs/swagger';

export class UserDTO {
    @ApiProperty({ example: 'uc.txt' })
    public readonly id: string;

    @ApiProperty({ example: 'Tom' })
    public readonly name: string;

    @ApiProperty({ example: 'Berserk Tomas' })
    public readonly displayName: string;

    @ApiProperty({ enum: UserRoles, example: UserRoles.Player, type: Number })
    public readonly role: UserRoles;

    @ApiProperty({ enum: UserStatuses, example: UserStatuses.Active, type: Number })
    public readonly status: UserStatuses;
}
