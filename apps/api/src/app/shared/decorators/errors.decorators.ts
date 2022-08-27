import { BadRequestErrorDTO, NotFoundErrorDTO, UnauthorizedDTO } from '@d-cave/api-interfaces';
import {
    ApiBadRequestResponse,
    ApiForbiddenResponse,
    ApiNotFoundResponse,
    ApiUnauthorizedResponse,
} from '@nestjs/swagger';

export const BadRequestResponse = () => {
    return ApiBadRequestResponse({ type: BadRequestErrorDTO });
};

export const UnauthorizedResponse = ApiUnauthorizedResponse({ type: UnauthorizedDTO });

export const ForbiddenResponse = ApiForbiddenResponse({ type: UnauthorizedDTO });

export const NotFoundResponse = ApiNotFoundResponse({ type: NotFoundErrorDTO });
