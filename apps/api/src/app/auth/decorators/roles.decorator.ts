import { UserRoles } from '@d-cave/shared';
import { SetMetadata } from '@nestjs/common';
import { ROLES_DECORATOR_TOKEN } from '../constants';

export const Roles = (roles: UserRoles[]) => {
    return SetMetadata(ROLES_DECORATOR_TOKEN, roles);
};
