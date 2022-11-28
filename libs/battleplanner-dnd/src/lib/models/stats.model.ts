import { Abilities } from '../interfaces/abilities.interface';
import { deriveModifier } from '../utils/abilities.utils';

export class StatsModel {
    constructor(public readonly abilities: Abilities) {}

    public deriveModifier(ability: keyof Abilities) {
        return deriveModifier(this.abilities[ability]);
    }
}
