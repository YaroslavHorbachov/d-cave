import { Module } from '@nestjs/common';
import { DBModule } from '../db/db.module';
import { EventsController } from './controllers';
import { EventsService } from './services';

@Module({
    providers: [EventsService],
    imports: [DBModule],
    controllers: [EventsController],
})
export class EventsModule {}
