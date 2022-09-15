import { UserRoles, UserStatuses } from '@d-cave/shared';
import { Prop, raw, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class User {
    @Prop({ required: true, unique: true })
    public readonly name: string;

    @Prop({ required: true })
    public readonly displayName: string;

    @Prop({ required: true })
    public readonly password: string;

    @Prop(
        raw({
            type: Number,
            required: true,
            enum: [UserRoles.Master, UserRoles.Player],
        })
    )
    public readonly role: UserRoles;

    @Prop(
        raw({
            type: Number,
            required: true,
            enum: [UserStatuses.Active, UserStatuses.Disabled, UserStatuses.Terminated],
            default: UserStatuses.Disabled,
        })
    )
    public readonly status: UserStatuses;
}

export const UserSchema = SchemaFactory.createForClass(User);

export type UserDocument = User & Document;
