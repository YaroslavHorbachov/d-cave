import { HUSTLE_DEFINITIONS } from '../constants';
import { Roles } from '../enums';
import { DiceRoller } from '../interfaces';
import { RollerUtils } from '../utils/roller.utils';

export class HustleService {
    constructor(private readonly diceRoller: DiceRoller) {}

    public generate(role: Roles, abilityRank: number) {
        const roleDefinition = HUSTLE_DEFINITIONS[role];
        const [matchedOption] = this.diceRoller.roll([roleDefinition]);

        if (!matchedOption?.masterOptions) {
            return null;
        }

        const matchedMasterOption = RollerUtils.findMatchedOption(
            abilityRank,
            matchedOption.masterOptions
        );

        return {
            matchedOption,
            matchedMasterOption,
        };
    }
}
