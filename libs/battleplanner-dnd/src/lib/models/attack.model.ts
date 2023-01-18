import { Attack } from 'battleplanner';
import { DiceOptions, DicePouch } from 'dice-pouch';
import { DamageTypes } from '../enums/damage-types.enum';
import { DamageModel } from './damage.model';

export class AttackModel implements Attack<DamageModel> {
    constructor(
        public readonly diceOptions: DiceOptions,
        public readonly modifier: number,
        public readonly type: DamageTypes
    ) {}

    roll(): DamageModel {
        const roll = DicePouch.sumRoll(this.diceOptions.count, this.diceOptions.type);

        const amount = roll + this.modifier;

        return new DamageModel(amount, this.type);
    }
}
