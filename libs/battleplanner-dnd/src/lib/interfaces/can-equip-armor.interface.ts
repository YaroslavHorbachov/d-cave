export interface CanEquipArmor<Armor> {
    equippedArmor: Armor[];

    equipArmor(armor: Armor): void;
}
