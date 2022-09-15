import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { CampaignDocument } from './campaign.schema';
import { UserDocument } from './user.schema';

@Schema()
export class Player {
    @Prop({
        type: { type: mongoose.Types.ObjectId, ref: 'Campaign', required: true },
    })
    public readonly campaign: CampaignDocument;

    @Prop({
        type: { type: mongoose.Types.ObjectId, ref: 'User', required: true },
    })
    public readonly user: UserDocument;
}

export const PlayerSchema = SchemaFactory.createForClass(Player);

export type PlayerDocument = Player & Document;
