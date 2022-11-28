export interface CanFight<AttackType> {
    rollAttack(): number;
    takeAttack(attackRoll: number, attacks: AttackType[]): void;
    checkIsHit(attackRoll: number): boolean;
}
