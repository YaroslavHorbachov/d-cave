import { DicePouch } from './dice-pouch';

describe('dicePouch', () => {
    it('should work 1d6', () => {
        Array.from({ length: 1_000 }).forEach(() => {
            const roll = DicePouch.roll(1, 6);

            expect(roll).toBeLessThanOrEqual(6);
        });
    });

    it('should work 10d20', () => {
        Array.from({ length: 1_000 }).forEach(() => {
            const roll = DicePouch.roll({ count: 10, type: 10 });

            expect(roll).toBeLessThanOrEqual(10 * 20);
        });
    });
});
