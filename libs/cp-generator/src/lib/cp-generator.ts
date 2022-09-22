import { DiceService } from './services';
import { BodegaService } from './services/bodega.service';
import { DiceRollerService } from './services/dice-roller.service';
import { HustleService } from './services/hustle.service';

export class CPGenerator {
    private readonly diceService = new DiceService();

    private readonly diceRollerService = new DiceRollerService(this.diceService);

    public readonly bodega = new BodegaService(this.diceRollerService);

    public readonly hustle = new HustleService(this.diceRollerService);
}
