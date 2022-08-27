import { Controller, Post } from '@nestjs/common';
import { PlayersService } from '../services/players.schema';

@Controller()
export class PlayersController {
    constructor(private readonly playersService: PlayersService) {}

    @Post()
    public create() {
        //
    }
}
