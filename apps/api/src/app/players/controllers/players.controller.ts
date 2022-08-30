import { Controller, Post } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { PlayersSchemaService } from '../services/players-schema.service';

@ApiBearerAuth()
@ApiTags('players')
@Controller()
export class PlayersController {
    constructor(private readonly playersService: PlayersSchemaService) {}

    @Post()
    public create() {
        //
    }
}
