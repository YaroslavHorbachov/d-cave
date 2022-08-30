import { MasterDTO } from '@d-cave/api-interfaces';
import { Injectable } from '@nestjs/common';
import { MasterDocument } from '../schemas';

@Injectable()
export class MastersUtilsService {
    public mapMany(documents: MasterDocument[]): MasterDTO[] {
        return documents.map((document) => this.mapOne(document));
    }

    public mapOne(document: MasterDocument): MasterDTO {
        const { id, user, campaigns } = document;
        const campaignsIds = campaigns.map((campaign) => campaign.id);

        return { id, userId: user.id, campaignsIds } as MasterDTO;
    }
}
