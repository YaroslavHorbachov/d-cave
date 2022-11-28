import { DicePouch } from 'dice-pouch';
import {
    Armor,
    Attack,
    CanFight,
    CanInitiative,
    CanMakeDamage,
    CanTakeDamage,
    Health,
} from '../interfaces';
import { getId } from '../utils';

type AttackType = Attack<number>;

export class Combatant
    implements CanTakeDamage, CanMakeDamage<AttackType>, CanFight<AttackType>, CanInitiative
{
    constructor(
        public readonly health: Health,
        public readonly armor: Armor,
        public readonly attacks: AttackType[]
    ) {}

    public readonly id = getId();

    public takeAttack(attackRoll: number, attacks: AttackType[]): void {
        const isHit = this.checkIsHit(attackRoll);

        if (isHit) {
            for (const attack of attacks) {
                const attackDamage = attack.roll();

                this.takeDamage(attackDamage);
            }
        }
    }

    public takeDamage(damage: number): void {
        this.health.hitPoints -= damage;
    }

    public rollAttack(): number {
        return DicePouch.roll(1, 20);
    }

    public rollInitiative(): number {
        return DicePouch.roll(1, 20);
    }

    public get isUnhealthy(): boolean {
        return this.health.hitPoints <= 0;
    }

    public get isHealthy(): boolean {
        return !this.isUnhealthy;
    }

    public checkIsHit(attackRoll: number): boolean {
        return attackRoll >= this.armor.armorPoints;
    }
}
