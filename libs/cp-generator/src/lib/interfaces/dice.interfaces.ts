import { DiceTypes } from '../enums';

export interface Dice {
    roll(diceType: DiceTypes): number;
}
