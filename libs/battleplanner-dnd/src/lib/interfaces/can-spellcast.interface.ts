export interface CanSpellcast {
    chooseSpell(): void;
    resetSpell(): void;

    // Use Slot Model instead
    spellSlots: [number];
}
