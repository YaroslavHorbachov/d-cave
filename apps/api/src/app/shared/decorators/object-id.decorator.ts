import { Param } from '@nestjs/common';
import { ObjectIdValidationPipe } from '../pipes/object-id-validation.pipe';

export const ObjectIdParam = (property: string) => Param(property, new ObjectIdValidationPipe());
