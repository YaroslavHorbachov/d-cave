import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Player, PlayerDocument } from '../schemas/player.schema';

@Injectable()
export class PlayersSchemaService {
    constructor(@InjectModel(Player.name) private readonly playerModel: Model<PlayerDocument>) {}

    public removeByUserId(userId: string) {
        return this.playerModel.findOneAndRemove({ user: userId });
    }
}
