import { AttackModel, Combatant } from '../models';
import { sortByInitiative } from '../utils/queue.utils';

export class Battleground {
    public createDuel() {
        const tomsAttacks = [new AttackModel({ count: 1, type: 6 }, 0)];
        const tom = new Combatant(
            { hitPoints: 15, maxHitPoints: 15 },
            { armorPoints: 10 },
            tomsAttacks
        );

        const bobsAttacks = [new AttackModel({ count: 1, type: 8 }, 0)];
        const bob = new Combatant(
            { hitPoints: 15, maxHitPoints: 15 },
            { armorPoints: 12 },
            bobsAttacks
        );

        const sortedCombatants = sortByInitiative([tom, bob]);

        const isRunning = true;

        mainLoop: while (isRunning) {
            for (let index = 0; index < sortedCombatants.length; index++) {
                const targetCombatant = sortedCombatants[index];

                const enemyCombatant = sortedCombatants.find(
                    (combatant) => combatant.id !== targetCombatant.id
                );

                if (enemyCombatant) {
                    const targetCombatantAttackRoll = targetCombatant.rollAttack();

                    enemyCombatant.takeAttack(targetCombatantAttackRoll, targetCombatant.attacks);

                    if (enemyCombatant.isUnhealthy) {
                        break mainLoop;
                    }
                }
            }
        }
    }
}
