import { DiceTypes } from '../enums/dice-types.enum';

export const DICE_FACETS = {
    [DiceTypes.D6]: 6,
    [DiceTypes.D10]: 10,
    [DiceTypes.D100]: 100,
} as const;
