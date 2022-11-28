import { Buff } from './buff.interface';

export interface CanApplyBuffs<CombatantType> {
    buffs: Buff<CombatantType, unknown>[];

    setBuffs(buffs: Buff<CombatantType, unknown>): void;

    resetBuffs(): void;
}
