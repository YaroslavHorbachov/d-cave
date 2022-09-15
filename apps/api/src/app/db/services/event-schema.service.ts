import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { DbBaseService } from '../interfaces/db-base-service.interface';
import { EventDocument } from '../schemas';

@Injectable()
export class EventSchemaService implements DbBaseService<EventDocument> {
    constructor(@InjectModel(Event.name) private readonly eventModel: Model<EventDocument>) {}

    public getAll(): Promise<EventDocument[]> {
        return this.eventModel.find({}).exec();
    }

    public async removeAll(): Promise<void> {
        await this.eventModel.remove({}).exec();
    }
}
