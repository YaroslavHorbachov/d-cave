import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Event, EventDocument } from '../schemas/event.schema';

@Injectable()
export class EventsService {
    constructor(@InjectModel(Event.name) private readonly eventModel: Model<EventDocument>) {}

    public getAll() {
        return this.eventModel.find({});
    }

    public create() {
        //
    }
}
