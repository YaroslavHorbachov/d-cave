import { DiceOptions, DicePouch } from 'dice-pouch';
import { Attack } from '../interfaces';

export class AttackModel implements Attack<number> {
    constructor(public readonly diceOptions: DiceOptions, public readonly modifier: number) {}

    public roll(): number {
        const roll = DicePouch.roll(this.diceOptions.count, this.diceOptions.type);

        return roll + this.modifier;
    }
}
