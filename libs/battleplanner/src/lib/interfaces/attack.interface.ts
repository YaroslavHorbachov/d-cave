import { DiceOptions } from 'dice-pouch';
import { CanRoll } from './can-roll.interface';

export interface Attack<DamageRollResult> extends CanRoll<DamageRollResult> {
    readonly diceOptions: DiceOptions;
    readonly modifier: number;
}
