import { Attack, CanMakeDamage } from 'battleplanner';
import { DamageModel } from '../models/damage.model';

export interface Item<AttackType = Attack<DamageModel>> extends CanMakeDamage<AttackType> {
    readonly id: number;
    readonly name: string;
    readonly cost: number;
    readonly weight: number;
}
