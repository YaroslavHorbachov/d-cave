import { WeaponCategories } from '../enums/weapon-categories.enum';
import { WeaponProperties } from '../interfaces/weapon-properties.interface';

export type SpellTemplate<SpellCategoriesType, SpellProperties> = SpellProperties & {
    readonly category: SpellCategoriesType;
};

export type Spell = SpellTemplate<WeaponCategories, WeaponProperties>;
