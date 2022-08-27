import { LoginDTO, LoginResponseDTO, RegisterUserDTO } from '@d-cave/api-interfaces';
import { Body, Controller, HttpCode, Post, Req, UseGuards } from '@nestjs/common';
import { ApiBody, ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { Request } from 'express';
import { BadRequestResponse, UnauthorizedResponse } from '../../shared/decorators';
import { LocalAuthGuard } from '../guards/local.guard';
import { LocalPayload } from '../interfaces';
import { AuthService } from '../services/auth.service';

@ApiTags('auth')
@Controller()
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @UseGuards(LocalAuthGuard)
    @Post('login')
    @ApiBody({
        type: LoginDTO,
    })
    @ApiOkResponse({
        type: LoginResponseDTO,
    })
    @UnauthorizedResponse
    @HttpCode(200)
    public login(@Req() req: Request) {
        return this.authService.login(req.user as LocalPayload);
    }

    @Post('register')
    @ApiBody({
        type: RegisterUserDTO,
    })
    @BadRequestResponse()
    @ApiCreatedResponse()
    public register(@Body() body: RegisterUserDTO) {
        return this.authService.register(body);
    }
}
