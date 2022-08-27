import { applyDecorators, UseGuards } from '@nestjs/common';
import { UnauthorizedResponse } from '../../shared/decorators';
import { RolesGuard } from '../guards/authorization.guard';
import { JwtAuthGuard } from '../guards/jwt.guard';

export const Auth = applyDecorators(UseGuards(JwtAuthGuard, RolesGuard), UnauthorizedResponse);
