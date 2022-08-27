import { UserRoles } from '@d-cave/shared';
import { applyDecorators } from '@nestjs/common';
import { Auth } from './auth.decorator';
import { Roles } from './roles.decorator';

export const AdminRole = applyDecorators(Roles([UserRoles.Admin]), Auth);
