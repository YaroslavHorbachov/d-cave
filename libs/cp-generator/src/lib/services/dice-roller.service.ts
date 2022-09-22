import { DiceTypes } from '../enums';
import { Dice, DiceRoller, DiceRollerDefinition, DiceRollerOptions } from '../interfaces';
import { RollerUtils } from '../utils/roller.utils';

export class DiceRollerService implements DiceRoller {
    constructor(private readonly dice: Dice) {}

    public roll(definitions: DiceRollerDefinition[]): DiceRollerOptions[] {
        const matchedOptions: DiceRollerOptions[] = [];
        const recursiveRoller = (definition: DiceRollerDefinition) => {
            const rolledValue = this.rollDices(definition.count, definition.type);
            const matchedOption = this.findMatchedOption(rolledValue, definition.options);

            if (!matchedOption) {
                return;
            }

            if (matchedOption?.definition) {
                recursiveRoller(matchedOption?.definition);
            }

            matchedOptions.push(matchedOption);
        };

        definitions.forEach((definition) => recursiveRoller(definition));

        return matchedOptions;
    }

    private findMatchedOption(
        rolledValue: number,
        options: DiceRollerOptions[]
    ): DiceRollerOptions | void {
        return RollerUtils.findMatchedOption(rolledValue, options);
    }

    private rollDices(count: number, type: DiceTypes): number {
        return Array.from({ length: count }).reduce((total: number) => {
            return total + this.dice.roll(type);
        }, 0);
    }
}
