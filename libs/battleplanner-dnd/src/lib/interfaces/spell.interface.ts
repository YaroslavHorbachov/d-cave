import { Attack, CanMakeDamage } from 'battleplanner';
import { DamageModel } from '../models/damage.model';

interface SpellDamageMatrix<DamageType> {
    readonly levelRange: [number, number];
    readonly damage: DamageType;
}

interface SpellDamage<DamageType> {
    readonly damage: SpellDamageMatrix<DamageType>;
}

interface SpellProperties {
    readonly name: number;
    readonly level: number;
    readonly castingTime: string;
}

export interface Spell<DamageType>
    extends SpellProperties,
        CanMakeDamage<Attack<DamageModel>>,
        SpellDamage<DamageType> {
    isPrepared: boolean;
}
