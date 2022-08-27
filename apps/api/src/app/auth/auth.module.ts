import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { environment } from '../../environments/environment';
import { MastersModule } from '../masters/masters.module';
import { UsersModule } from '../users/users.module';
import { AuthController } from './controllers';
import { AuthService } from './services';
import { JwtStrategy, LocalStrategy } from './strategies';

@Module({
    providers: [AuthService, LocalStrategy, JwtStrategy],
    imports: [
        UsersModule,
        PassportModule,
        JwtModule.register({
            secret: environment.jwtSecret,
            signOptions: { expiresIn: environment.jwtExpiresIn },
        }),
        MastersModule,
    ],
    controllers: [AuthController],
})
export class AuthModule {}
