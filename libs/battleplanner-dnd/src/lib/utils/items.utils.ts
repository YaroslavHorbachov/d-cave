import { DEFAULT_IMPROVISED_ATTACK } from '../constants/defaults.constants';
import { Item } from '../interfaces/item.interface';
import { getId } from './id.utils';

export function createItem<ItemType extends Item>(itemProps: Partial<ItemType>): ItemType {
    const defaultProps = { id: getId(), attacks: [DEFAULT_IMPROVISED_ATTACK] } as Pick<
        ItemType,
        'id' | 'attacks'
    >;

    return { ...defaultProps, ...itemProps } as ItemType;
}
