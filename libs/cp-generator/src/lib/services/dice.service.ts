import { DICE_FACETS } from '../constants';
import { DiceTypes } from '../enums/dice-types.enum';
import { Dice } from '../interfaces';

export class DiceService implements Dice {
    public rollD6(): number {
        return this.roll(DiceTypes.D6);
    }

    public rollD10(): number {
        return this.roll(DiceTypes.D10);
    }

    public roll(diceType: DiceTypes): number {
        const facets = DICE_FACETS[diceType];

        return Math.ceil(Math.random() * facets);
    }
}
