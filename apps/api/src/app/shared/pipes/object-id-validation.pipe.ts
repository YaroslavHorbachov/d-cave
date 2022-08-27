import { BadRequestException, PipeTransform } from '@nestjs/common';
import { Types } from 'mongoose';

export class ObjectIdValidationPipe implements PipeTransform {
    public transform(value: string) {
        const isValidObjectId = Types.ObjectId.isValid(value);

        if (!isValidObjectId) {
            throw new BadRequestException('Invalid Object Id value');
        }

        return value;
    }
}
