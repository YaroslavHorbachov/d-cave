import { CampaignDTO, CampaingPlayerDTO } from '@d-cave/api-interfaces';
import { Injectable } from '@nestjs/common';
import { CampaignDocument } from '../schemas';

@Injectable()
export class CampaignsUtilsService {
    public mapMany(documents: CampaignDocument[]) {
        return documents.map((document) => this.mapOne(document));
    }

    public mapOne(document: CampaignDocument): CampaignDTO {
        const players = document.players.map((player) => {
            return { id: player.id, name: player.name } as CampaingPlayerDTO;
        });

        return { id: document.id, players, description: document.description, name: document.name };
    }
}
