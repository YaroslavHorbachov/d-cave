import { UserStatuses } from '@d-cave/shared';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { LocalPayload } from '../interfaces';
import { AuthService } from '../services';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
    constructor(private authService: AuthService) {
        super({
            usernameField: 'name',
        });
    }

    async validate(name: string, password: string): Promise<LocalPayload> {
        const user = await this.authService.validateUser(name, password);
        const isUserAvailable = this.checkUserAvailabilty(user);

        if (!isUserAvailable) {
            throw new UnauthorizedException();
        }

        return user;
    }

    private checkUserAvailabilty(user: LocalPayload): boolean {
        const isExist = Boolean(user);

        if (!isExist) {
            return false;
        }

        const isActive = user.status === UserStatuses.Active;

        if (!isActive) {
            return false;
        }

        return true;
    }
}
