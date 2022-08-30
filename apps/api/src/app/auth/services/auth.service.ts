import { RegisterUserDTO } from '@d-cave/api-interfaces';
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { MastersSchemaService } from '../../masters/services';
import { UsersSchemaService } from '../../users/services';
import { LocalPayload, TokenPayload } from '../interfaces';

@Injectable()
export class AuthService {
    constructor(
        private readonly usersSchemaService: UsersSchemaService,
        private readonly mastersSchemaService: MastersSchemaService,
        private readonly jwtService: JwtService
    ) {}

    async validateUser(name: string, password: string): Promise<LocalPayload> {
        const user = await this.usersSchemaService.findByName(name);

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
        const user = await this.usersSchemaService.createMaster(model);

        await this.mastersSchemaService.create(user.id);
    }
}
