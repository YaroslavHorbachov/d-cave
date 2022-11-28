import { DamageTypes } from '../enums/damage-types.enum';
import { AttackModel } from '../models/attack.model';

export const DEFAULT_IMPROVISED_ATTACK = new AttackModel(
    { count: 1, type: 4 },
    0,
    DamageTypes.Bludgeoning
);
