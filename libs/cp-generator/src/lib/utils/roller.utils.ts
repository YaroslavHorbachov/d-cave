import { DiceRollerMatchingOptions, DiceRollerMatchingRange } from '../interfaces';

function checkInRange(range: DiceRollerMatchingRange, value: number) {
    const [lowBound, highBound] = range;

    return lowBound <= value && value <= highBound;
}

function findMatchedOption<Options extends DiceRollerMatchingOptions = DiceRollerMatchingOptions>(
    rolledValue: number,
    options: Options[]
): Options | void {
    const matchedOption = options.find((option) => {
        if (option.matchingRoll) {
            return option.matchingRoll === rolledValue;
        }

        if (option.matchingRange) {
            return checkInRange(option.matchingRange, rolledValue);
        }

        return false;
    });

    return matchedOption;
}

export const RollerUtils = { findMatchedOption };
