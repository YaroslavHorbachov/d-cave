import { Injectable } from '@nestjs/common';
import { PlayersSchemaService } from './players-schema.service';

@Injectable()
export class PlayersService {
    constructor(private readonly playersSchemaService: PlayersSchemaService) {}

    public async removeByCampaingsIds(ids: string[]) {
        // TODO: Implement remove players by campaingId
        return ids;
    }

    public async removeByUserId(userId: string) {
        await this.playersSchemaService.removeByUserId(userId);
    }
}
