export interface CanEquipWeapon<Weapon> {
    equippedWeapons: Weapon[];

    equipWeapon(weapon: Weapon): void;
}
