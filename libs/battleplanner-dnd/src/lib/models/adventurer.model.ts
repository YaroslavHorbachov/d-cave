import { Attack, CanFight, CanInitiative } from 'battleplanner';
import { DicePouch } from 'dice-pouch';
import { BuffTypes } from '../enums/buff-types.enum';
import { Buff } from '../interfaces/buff.interface';
import { CanApplyBuffs } from '../interfaces/can-apply-buffs.interface';
import { CanEquipArmor } from '../interfaces/can-equip-armor.interface';
import { CanEquipTwoHandedWeapon } from '../interfaces/can-equip-two-handed-weapon.interface';
import { CanEquipWeapon } from '../interfaces/can-equip-weapon.interface';
import { CanStrike } from '../interfaces/can-strike.interface';
import { Strike } from '../interfaces/strike.interface';
import { ArmorItem } from '../types/armor.types';
import { WeaponItem } from '../types/weapon.types';
import { deriveModifier } from '../utils/abilities.utils';
import { applyBuffsTransformation } from '../utils/buffs.utils';
import { DamageModel } from './damage.model';
import { InventoryModel } from './inventory.model';
import { StatsModel } from './stats.model';

export class AdventurerModel
    implements
        CanInitiative,
        CanFight<Attack<DamageModel>>,
        CanEquipArmor<ArmorItem<StatsModel>>,
        CanEquipWeapon<WeaponItem>,
        CanEquipTwoHandedWeapon,
        CanStrike<WeaponItem>,
        CanApplyBuffs<AdventurerModel>
{
    constructor(private readonly stats: StatsModel, private readonly inventory: InventoryModel) {}

    buffs: Buff<AdventurerModel, unknown>[] = [];

    setBuffs(buffs: Buff<AdventurerModel, unknown>): void {
        throw new Error('Method not implemented.');
    }
    resetBuffs(): void {
        throw new Error('Method not implemented.');
    }

    strikes: Strike<WeaponItem>[] = [];

    setStrikes(strikes: Strike<WeaponItem>[]): void {
        this.strikes = strikes;
    }

    resetStrikes(): void {
        this.strikes = [];
    }

    applyStrike(): Strike<WeaponItem> | undefined {
        return this.strikes.shift();
    }

    equippedArmor: ArmorItem<StatsModel>[] = [];

    equipArmor(armor: ArmorItem<StatsModel>): void {
        // TODO: Process donning and doffing
        // TODO: Process multiple armor for same place
        this.equippedArmor.push(armor);
    }

    // Versatile weapon check
    public isTwoHanded = false;

    pickAsTwoHanded(): void {
        this.isTwoHanded = true;
    }

    pickAsOneHanded(): void {
        this.isTwoHanded = false;
    }

    equippedWeapons: WeaponItem[] = [];

    equipWeapon(weapon: WeaponItem): void {
        // TODO: Process donning and doffing
        // TODO: Process multiple armor for same place

        this.equippedWeapons.push(weapon);
    }

    rollAttack(): number {
        if (this.strikes.length === 0) {
            throw new Error('Need to setup strikes.');
        }

        const mainRoll = DicePouch.sumRoll(1, 20);

        const targetStrike = this.applyStrike();

        if (!targetStrike) {
            throw new Error('Cannot apply strike.');
        }

        const buffedTargetStat = applyBuffsTransformation(
            this,
            targetStrike.isRanged ? this.stats.abilities.dexterity : this.stats.abilities.strength,
            targetStrike.isRanged ? BuffTypes.Dexterity : BuffTypes.Strength
        );
        const abilityMod = deriveModifier(buffedTargetStat);
        const proficiencyMod = 0;

        return mainRoll + abilityMod + proficiencyMod;
    }

    takeAttack(attackRoll: number, attacks: Attack<DamageModel>[]): void {
        throw new Error('Method not implemented.');
    }
    checkIsHit(attackRoll: number): boolean {
        throw new Error('Method not implemented.');
    }

    public rollInitiative(): number {
        const buffedDexterity = applyBuffsTransformation(
            this,
            this.stats.abilities.dexterity,
            BuffTypes.InitiativeMod
        );
        const initiativeMod = deriveModifier(buffedDexterity);
        const buffedInitiativeMod = applyBuffsTransformation(
            this,
            initiativeMod,
            BuffTypes.InitiativeMod
        );
        const initiative = DicePouch.sumRoll({ count: 1, type: 20 });
        const buffedInitiative = applyBuffsTransformation(this, initiative, BuffTypes.Initiative);

        return buffedInitiative + buffedInitiativeMod;
    }
}
