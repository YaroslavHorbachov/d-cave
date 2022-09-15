import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { DbBaseService } from '../interfaces/db-base-service.interface';
import { Player, PlayerDocument } from '../schemas/player.schema';

@Injectable()
export class PlayersSchemaService implements DbBaseService<PlayerDocument> {
    constructor(@InjectModel(Player.name) private readonly playerModel: Model<PlayerDocument>) {}

    public getAll(): Promise<PlayerDocument[]> {
        return this.playerModel.find({}).exec();
    }

    public async removeAll(): Promise<void> {
        await this.playerModel.remove({});
    }

    public removeByUserId(userId: string) {
        return this.playerModel.findOneAndRemove({ user: userId });
    }
}
