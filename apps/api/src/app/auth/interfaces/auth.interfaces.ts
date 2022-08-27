import { UserRoles, UserStatuses } from '@d-cave/shared';

export interface LocalPayload {
    readonly id: string;
    readonly name: string;
    readonly status: UserStatuses;
    readonly role: UserRoles;
}

export interface TokenPayload {
    readonly id: string;
    readonly name: string;
    readonly status: UserStatuses;
    readonly role: UserRoles;
}

export interface RequestUser {
    readonly id: string;
    readonly name: string;
    readonly status: UserStatuses;
    readonly role: UserRoles;
}
