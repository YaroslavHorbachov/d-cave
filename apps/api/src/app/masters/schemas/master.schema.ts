import { Prop, raw, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Types } from 'mongoose';
import { CampaignDocument } from '../../campaigns/schemas';
import { UserDocument } from '../../users/schemas';

@Schema()
export class Master {
    @Prop(raw({ type: [mongoose.Types.ObjectId], ref: 'Campaign', default: [] }))
    public readonly campaigns: Types.DocumentArray<CampaignDocument>;

    @Prop(raw({ type: mongoose.Types.ObjectId, ref: 'User', required: true }))
    public readonly user: UserDocument;
}

export const MasterSchema = SchemaFactory.createForClass(Master);

export type MasterDocument = Master & Document;
