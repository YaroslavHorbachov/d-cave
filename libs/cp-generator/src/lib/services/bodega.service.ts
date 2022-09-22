import {
    COLORFUL_CHARACTER_ONE,
    COLORFUL_CHARACTER_TWO,
    OWNER_DEFINITION
} from '../constants/bodega.constants';
import { DiceRoller } from '../interfaces';

export class BodegaService {
    constructor(private readonly diceRoller: DiceRoller) {}

    public generate() {
        return this.diceRoller.roll([
            OWNER_DEFINITION,
            COLORFUL_CHARACTER_ONE,
            COLORFUL_CHARACTER_TWO,
        ]);
    }
}
