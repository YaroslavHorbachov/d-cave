import { CreateCampaignDTO, UpdateCampaignDTO } from '@d-cave/api-interfaces';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Query } from 'mongoose';
import { Campaign, CampaignDocument } from '../schemas';

@Injectable()
export class CampaignsSchemaService {
    constructor(
        @InjectModel(Campaign.name)
        private readonly campaignsModel: Model<CampaignDocument>
    ) {}

    public getAll(): Promise<CampaignDocument[]> {
        return this.campaignsModel.find({}).populate('players').exec();
    }

    public getAllByUserId(userId: string): Promise<CampaignDocument[]> {
        return this.findAllByUserId(userId).populate('players').exec();
    }

    public async update(userId: string, campaignId: string, model: UpdateCampaignDTO) {
        const campaign = await this.campaignsModel.findOneAndUpdate(
            {
                _id: campaignId,
                master: userId,
            },
            model
        );

        if (!campaign) {
            throw new NotFoundException('Campaing not found');
        }

        return campaign;
    }

    public async create(userId: string, model: CreateCampaignDTO) {
        return this.campaignsModel.create({ ...model, master: userId });
    }

    public async removeByCampaingId(userId: string, campaignId: string) {
        const campaign = await this.campaignsModel.findOneAndDelete({
            _id: campaignId,
            master: userId,
        });

        if (!campaign) {
            throw new NotFoundException('Campaing not found');
        }

        return campaign;
    }

    public async removeByMasterId(userId: string) {
        const campaigns = await this.campaignsModel.find({ master: userId });

        if (campaigns.length > 0) {
            await this.campaignsModel.remove({ master: userId });
        }

        return campaigns;
    }

    private findAllByUserId(masterId: string): Query<CampaignDocument[], CampaignDocument> {
        return this.campaignsModel.find({ master: masterId });
    }
}
