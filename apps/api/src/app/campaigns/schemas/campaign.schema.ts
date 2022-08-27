import { Prop, raw, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document, Types } from 'mongoose';
import { UserDocument } from '../../users/schemas';

@Schema()
export class Campaign {
    @Prop({ required: true })
    public readonly name: string;

    @Prop(
        raw({
            type: [mongoose.Types.ObjectId],
            ref: 'User',
            default: [],
        })
    )
    public readonly players: Types.DocumentArray<UserDocument>;

    @Prop(
        raw({
            type: mongoose.Types.ObjectId,
            ref: 'User',
            required: true,
        })
    )
    public readonly master: UserDocument;

    @Prop()
    public readonly description?: string;
}

export type CampaignDocument = Campaign & Document;

export const CampaignSchema = SchemaFactory.createForClass(Campaign);
