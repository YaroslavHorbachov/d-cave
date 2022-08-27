import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { EventsController } from './controllers';
import { Event, EventSchema } from './schemas';
import { EventsService } from './services';

@Module({
    providers: [EventsService],
    imports: [MongooseModule.forFeature([{ name: Event.name, schema: EventSchema }])],
    controllers: [EventsController],
})
export class EventsModule {}
