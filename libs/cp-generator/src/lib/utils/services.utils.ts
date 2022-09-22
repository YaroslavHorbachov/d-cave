import { DiceService } from '../services';
import { DiceRollerService } from '../services/dice-roller.service';

export function diceRollerServiceFactory() {
    const diceService = new DiceService();

    return new DiceRollerService(diceService);
}
