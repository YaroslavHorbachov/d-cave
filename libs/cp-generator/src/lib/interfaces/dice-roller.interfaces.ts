import { DiceTypes } from '../enums/dice-types.enum';

export interface DiceRoller {
    roll(definitions: DiceRollerDefinition[]): DiceRollerOptions[];
}

export type DiceRollerMatchingRange = [number, number];

export interface DiceRollerMatchingOptions {
    readonly matchingRange?: DiceRollerMatchingRange; // should be required when matchingRoll is empty
    readonly matchingRoll?: number; // should be required when matchingRange is empty
    readonly masterNote?: string;
}

export interface DiceRollerOptions extends DiceRollerMatchingOptions {
    readonly title?: string;
    readonly playerDescription: string;
    readonly masterOptions?: DiceRollerMatchingOptions[];
    readonly definition?: DiceRollerDefinition;
}

export interface DiceRollerDefinition {
    readonly count: number;
    readonly type: DiceTypes;
    readonly options: DiceRollerOptions[];
}
