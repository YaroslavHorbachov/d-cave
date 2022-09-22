import { DICE_FACETS } from '../constants';
import { DiceTypes } from '../enums/dice-types.enum';
import { DiceService } from './dice.service';

describe('cpGenerator', () => {
    let service: DiceService;

    beforeEach(() => {
        service = new DiceService();
    });

    it('should roll d6', () => {
        expect(service.rollD6()).toBeLessThanOrEqual(DICE_FACETS[DiceTypes.D6]);
    });

    it('should roll d10', () => {
        expect(service.rollD10()).toBeLessThanOrEqual(DICE_FACETS[DiceTypes.D10]);
    });
});
