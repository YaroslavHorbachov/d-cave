import { Armor } from 'battleplanner';

export interface ArmorProperties<ArmorEntity = null> extends Armor {
    // TODO: May be customized by more complex expression
    readonly strengthRequirement?: number;
    readonly stealthDisadvantage?: boolean;

    readonly armorPointsModifier: (armorEntity: ArmorEntity) => number;
}
