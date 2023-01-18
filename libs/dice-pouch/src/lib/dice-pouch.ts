import { DiceOptions } from './dice-options.interface';

export class DicePouch {
    public static sumRoll(options: DiceOptions): number;
    public static sumRoll(count: number, type: number): number;
    public static sumRoll(countOptions: number | DiceOptions, type = 0): number {
        if (typeof countOptions === 'object') {
            return this.makeSumRoll(countOptions.count, countOptions.type);
        }

        if (typeof countOptions === 'number') {
            return this.makeSumRoll(countOptions, type);
        }

        return 0;
    }

    public static sequenceRoll(options: DiceOptions): number[];
    public static sequenceRoll(count: number, type: number): number[];
    public static sequenceRoll(countOptions: number | DiceOptions, type = 0): number[] {
        if (typeof countOptions === 'object') {
            return this.makeSequenceRoll(countOptions.count, countOptions.type);
        }

        if (typeof countOptions === 'number') {
            return this.makeSequenceRoll(countOptions, type);
        }

        return [0];
    }

    private static makeSumRoll(count: number, type: number) {
        let sum = 0;

        for (let index = 0; index < count; index++) {
            sum += this.random(type);
        }

        return sum;
    }

    private static makeSequenceRoll(count: number, type: number): number[] {
        const sequence: number[] = [];

        for (let index = 0; index < count; index++) {
            sequence.push(this.random(type));
        }

        return sequence;
    }

    private static random(max: number) {
        return Math.floor(Math.random() * max + 1);
    }
}
