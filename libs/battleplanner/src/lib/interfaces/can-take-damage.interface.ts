export interface CanTakeDamage<DamageType = number> {
    takeDamage(damage: DamageType): void;
}
