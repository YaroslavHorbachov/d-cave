import { DamageTypes } from '../enums/damage-types.enum';

export class DamageModel {
    constructor(public readonly amount: number, public readonly type: DamageTypes) {}
}
