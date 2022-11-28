export type Condition<CombatantType> = (combatant: CombatantType) => boolean;
export type Effect<BuffPayload> = (combatant: BuffPayload) => BuffPayload;
