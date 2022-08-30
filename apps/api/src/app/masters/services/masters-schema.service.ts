import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CampaignDocument } from '../../campaigns/schemas';
import { Master, MasterDocument } from '../schemas';

@Injectable()
export class MastersSchemaService {
    constructor(
        @InjectModel(Master.name)
        private readonly masterModel: Model<MasterDocument>
    ) {}

    public getAll() {
        return this.masterModel.find({}).exec();
    }

    public create(userId: string) {
        return this.masterModel.create({ user: userId });
    }

    public async addCampaign(userId: string, campaign: CampaignDocument) {
        const master = await this.findByUserId(userId);

        master.campaigns.push(campaign);

        await master.save();
    }

    public async removeCampaign(userId: string, campaignId: string) {
        const master = await this.findByUserId(userId);

        master.campaigns.pull(campaignId);

        await master.save();

        console.log(master);
    }

    public removeByUserId(id: string) {
        return this.masterModel.findOneAndRemove({ user: id });
    }

    private async findByUserId(userId: string) {
        const document = await this.masterModel.findOne({ user: userId });

        if (!document) {
            throw new NotFoundException('Master not found');
        }

        return document;
    }
}