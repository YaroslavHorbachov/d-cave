import { EventStatuses, EventTypes } from '@d-cave/shared';
import { Prop, raw, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Types } from 'mongoose';
import { CampaignDocument } from './campaign.schema';
import { UserDocument } from './user.schema';

@Schema()
export class Event {
    @Prop({
        type: { type: mongoose.Types.ObjectId, ref: 'Campaign', required: true },
    })
    public readonly campaign: CampaignDocument;

    @Prop({
        type: { type: mongoose.Types.ObjectId, ref: 'User', required: true },
    })
    public readonly sender: UserDocument;

    @Prop({
        type: [{ type: mongoose.Types.ObjectId, ref: 'User' }],
        required: true,
    })
    public readonly recievers: Types.DocumentArray<UserDocument>;

    @Prop(
        raw({
            type: Number,
            required: true,
            enum: [EventStatuses.Approved, EventStatuses.Declined, EventStatuses.Pending],
            default: EventStatuses.Pending,
        })
    )
    public readonly status: EventStatuses;

    @Prop(
        raw({
            type: Number,
            required: true,
            enum: [EventTypes.Default, EventTypes.Combat, EventTypes.Environment],
            default: EventTypes.Default,
        })
    )
    public readonly type: EventTypes;

    @Prop()
    public readonly description?: string;
}

export const EventSchema = SchemaFactory.createForClass(Event);

export type EventDocument = Event & Document;
