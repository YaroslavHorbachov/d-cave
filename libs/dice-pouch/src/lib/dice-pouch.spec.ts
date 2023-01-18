import { DicePouch } from './dice-pouch';

describe('dicePouch', () => {
    describe('sum roll', () => {
        it('should work 1d6', () => {
            Array.from({ length: 1_000 }).forEach(() => {
                const roll = DicePouch.sumRoll(1, 6);

                expect(roll).toBeLessThanOrEqual(6);
            });
        });

        it('should work 10d20', () => {
            Array.from({ length: 1_000 }).forEach(() => {
                const roll = DicePouch.sumRoll({ count: 10, type: 20 });

                expect(roll).toBeLessThanOrEqual(10 * 20);
            });
        });
    });

    describe('sequence roll', () => {
        it('should work 1d6', () => {
            Array.from({ length: 1_000 }).forEach(() => {
                const roll = DicePouch.sequenceRoll(1, 6);

                expect(roll).toBeInstanceOf(Array);
                roll.forEach((result) => expect(result).toBeLessThanOrEqual(6));
            });
        });

        it('should work 10d20', () => {
            Array.from({ length: 1_000 }).forEach(() => {
                const roll = DicePouch.sequenceRoll({ count: 10, type: 20 });

                expect(roll).toBeInstanceOf(Array);
                roll.forEach((result) => expect(result).toBeLessThanOrEqual(20));
            });
        });
    });
});
