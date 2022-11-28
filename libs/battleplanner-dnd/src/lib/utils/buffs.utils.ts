import { BuffTypes } from '../enums/buff-types.enum';
import { CanApplyBuffs } from '../interfaces/can-apply-buffs.interface';

export function applyBuffsTransformation<
    CombatantType extends CanApplyBuffs<CombatantType>,
    BuffPayload
>(combatant: CombatantType, buffPayload: BuffPayload, type: BuffTypes): BuffPayload {
    const transformedPayload = combatant.buffs.reduce((baseBuffPayload, buff) => {
        const isActiveBuff = buff.type === type && buff.condition(combatant);

        if (isActiveBuff) {
            return buff.effect(baseBuffPayload) as BuffPayload;
        }

        return baseBuffPayload;
    }, buffPayload);

    return transformedPayload;
}
