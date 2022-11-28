// import { Conditions, DamageTypes } from '../enums';

interface CombatantOptions {
    hitPoints: number;
    readonly maxHitPoints: number;

    readonly initiativeModifier: number;
    readonly attackModifier: number;

    // readonly weapons: Weapon[];
    // readonly buffs: Buff[];
    // readonly damageVulnerabilities: DamageTypes[];
    // readonly damageImmunities: DamageTypes[];
    // readonly conditionImmunities: Conditions[];
}
