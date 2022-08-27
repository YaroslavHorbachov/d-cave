import { UserRoles } from '@d-cave/shared';
import { ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { ROLES_DECORATOR_TOKEN } from '../constants';
import { RequestUser } from '../interfaces';

@Injectable()
export class RolesGuard {
    constructor(private readonly reflector: Reflector) {}

    public canActivate(context: ExecutionContext) {
        const roles = this.reflector.get<UserRoles[]>(ROLES_DECORATOR_TOKEN, context.getHandler());

        return this.checkRoles(roles, context);
    }

    private checkRoles(roles: UserRoles[], context: ExecutionContext) {
        const request = context.switchToHttp().getRequest();
        const user = request.user as RequestUser;

        return this.matchRoles(user.role, roles);
    }

    private matchRoles(userRole: UserRoles, targetRoles: UserRoles[]) {
        return targetRoles.includes(userRole);
    }
}
