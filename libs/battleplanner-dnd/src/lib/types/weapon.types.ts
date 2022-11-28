import { Attack } from 'battleplanner';
import { WeaponCategories } from '../enums/weapon-categories.enum';
import { Item } from '../interfaces/item.interface';
import { WeaponProperties } from '../interfaces/weapon-properties.interface';
import { DamageModel } from '../models/damage.model';

export type WeaponItemTemplate<ItemType, WeaponCategoriesType, WeaponProperties> = ItemType &
    WeaponProperties & {
        readonly category: WeaponCategoriesType;
    };

export type WeaponItem = WeaponItemTemplate<
    Item<Attack<DamageModel>>,
    WeaponCategories,
    WeaponProperties
>;
