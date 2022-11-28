import { DicePouch } from 'dice-pouch';
import { BuffTypes } from '../enums/buff-types.enum';
import { Buff } from '../models';

// Example for Barbarian
export const feralInstinct: Buff<null, number> = {
    condition: () => true,
    type: BuffTypes.Initiative,
    effect: (currentRoll) => {
        // TODO: Create utils for roll with advantage or disadvantage
        const reroll = DicePouch.roll({ count: 1, type: 20 });

        return Math.max(currentRoll, reroll);
    },
};

export const fightingStyleDefense: Buff<null, number> = {
    condition: () => true,
    type: BuffTypes.AC,
    effect: (currentRoll) => {
        // TODO: Create utils for roll with advantage or disadvantage
        const reroll = DicePouch.roll({ count: 1, type: 20 });

        return Math.max(currentRoll, reroll);
    },
};
