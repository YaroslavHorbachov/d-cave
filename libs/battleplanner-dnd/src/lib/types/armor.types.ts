import { ArmorCategories } from '../enums/armor-categories.enum';
import { ArmorProperties } from '../interfaces/armor-properties.interface';
import { Item } from '../interfaces/item.interface';

export type ArmorItemTemplate<ItemType, ArmorCategoriesType, ArmorPropertiesType> = ItemType &
    ArmorPropertiesType & {
        readonly category: ArmorCategoriesType;
    };

export type ArmorItem<ArmorEntity> = ArmorItemTemplate<
    Item,
    ArmorCategories,
    ArmorProperties<ArmorEntity>
>;
