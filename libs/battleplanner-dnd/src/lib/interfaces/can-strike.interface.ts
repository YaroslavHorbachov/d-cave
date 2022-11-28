import { Strike } from './strike.interface';

export interface CanStrike<WeaponItem> {
    strikes: Strike<WeaponItem>[];

    setStrikes(strikes: Strike<WeaponItem>[]): void;

    applyStrike(): Strike<WeaponItem> | undefined;

    resetStrikes(): void;
}
