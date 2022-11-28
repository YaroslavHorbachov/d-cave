import { DiceOptions } from './dice-options.interface';

export class DicePouch {
    public static roll(options: DiceOptions): number;
    public static roll(count: number, type: number): number;
    public static roll(countOptions: number | DiceOptions, type = 0): number {
        if (typeof countOptions === 'object') {
            return this.makeRoll(countOptions.count, countOptions.type);
        }

        if (typeof countOptions === 'number') {
            return this.makeRoll(countOptions, type);
        }

        return 0;
    }

    private static makeRoll(count: number, type: number) {
        let total = 0;

        for (let index = 0; index < count; index++) {
            total += this.random(type);
        }

        return total;
    }

    private static random(max: number) {
        return Math.floor(Math.random() * max + 1);
    }
}
