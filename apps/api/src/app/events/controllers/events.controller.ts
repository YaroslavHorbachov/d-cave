import { Controller, Get, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { EventsService } from '../services';

@Controller()
@ApiTags('events')
export class EventsController {
    constructor(private readonly eventsService: EventsService) {}

    @Get()
    public getAll() {
        this.eventsService.getAll();
    }

    @Post()
    public create() {
        this.eventsService.create();
    }
}
