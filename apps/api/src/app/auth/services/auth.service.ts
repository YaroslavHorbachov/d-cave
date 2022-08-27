import { RegisterUserDTO } from '@d-cave/api-interfaces';
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { MastersService } from '../../masters/services';
import { UsersService } from '../../users/services';
import { LocalPayload, TokenPayload } from '../interfaces';

@Injectable()
export class AuthService {
    constructor(
        private readonly usersService: UsersService,
        private readonly mastersService: MastersService,
        private readonly jwtService: JwtService
    ) {}

    async validateUser(name: string, password: string): Promise<LocalPayload> {
        const user = await this.usersService.findByName(name);

        if (user?.password === password) {
            const { _id, name, status, role } = user;

            return { id: _id.toString(), name, status, role };
        }

        return null;
    }

    async login(user: LocalPayload) {
        const { role, name, status, id } = user;
        const payload = { id, name, role, status } as TokenPayload;

        return {
            accessToken: this.jwtService.sign(payload),
        };
    }

    public async register(model: RegisterUserDTO): Promise<void> {
        const user = await this.usersService.createMaster(model);

        await this.mastersService.create(user.id);
    }
}
