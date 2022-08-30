import { CreateUser, RegisterUserDTO, UpdateUserDTO } from '@d-cave/api-interfaces';
import { UserRoles, UserStatuses } from '@d-cave/shared';
import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from '../schemas';

@Injectable()
export class UsersSchemaService {
    constructor(@InjectModel(User.name) private readonly userModel: Model<UserDocument>) {}

    public getAll() {
        return this.userModel.find({}).exec();
    }

    public createMaster(model: RegisterUserDTO) {
        const document = { ...model, role: UserRoles.Master } as User;

        return this.create(document);
    }

    public createPlayer(model: RegisterUserDTO) {
        const document = { ...model, role: UserRoles.Player } as User;

        return this.create(document);
    }

    public findById(id: string) {
        return this.userModel.findById(id);
    }

    public findByName(name: string) {
        return this.userModel.findOne({ name });
    }

    public activateById(id: string) {
        return this.updateById(id, { status: UserStatuses.Active });
    }

    public terminateById(id: string) {
        return this.updateById(id, { status: UserStatuses.Terminated });
    }

    public async create(model: CreateUser) {
        const user = await this.findByName(model.name);

        if (user) {
            throw new BadRequestException('Name already exist');
        }

        const displayName = model.name.toUpperCase();

        return this.userModel.create({ ...model, displayName });
    }

    public async update(id: string, model: UpdateUserDTO) {
        return this.updateById(id, model);
    }

    public async remove(id: string) {
        return this.userModel.findByIdAndRemove(id);
    }

    private async updateById(id: string, model: Partial<UserDocument>) {
        // TODO: Check name uniqueness
        const user = await this.userModel.findByIdAndUpdate(id, model);

        if (!user) {
            throw new NotFoundException('User not found');
        }

        return user;
    }
}
