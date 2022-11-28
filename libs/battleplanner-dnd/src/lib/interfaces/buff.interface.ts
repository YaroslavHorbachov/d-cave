import { BuffTypes } from '../enums/buff-types.enum';
import { Condition, Effect } from '../types';

// Add up and down conditions and effects
export interface Buff<CombatantType, BuffPayload> {
    readonly type: BuffTypes;
    readonly condition: Condition<CombatantType>;
    readonly effect: Effect<BuffPayload>;
}
