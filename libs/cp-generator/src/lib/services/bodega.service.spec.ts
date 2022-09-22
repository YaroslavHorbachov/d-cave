import { DICE_FACETS } from '../constants';
import { DiceTypes } from '../enums';
import { diceRollerServiceFactory } from '../utils';
import { BodegaService } from './bodega.service';
describe('cpGenerator', () => {
    let service: BodegaService;

    beforeEach(() => {
        const diceRollerService = diceRollerServiceFactory();

        service = new BodegaService(diceRollerService);
    });

    it('should generate results', () => {
        const generatedResult = service.generate();

        console.log(generatedResult);

        expect(generatedResult.length).toBe(3);

        generatedResult.forEach((item) => {
            expect(item.matchingRoll).toBeLessThanOrEqual(DICE_FACETS[DiceTypes.D6]);
            expect(item.matchingRoll).not.toEqual(0);
        });
    });
});
