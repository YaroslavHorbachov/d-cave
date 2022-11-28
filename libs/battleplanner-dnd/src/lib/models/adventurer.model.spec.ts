import { ArmorCategories } from '../enums/armor-categories.enum';
import { ArmorItem } from '../types/armor.types';
import { createItem } from '../utils/items.utils';
import { AdventurerModel } from './adventurer.model';
import { InventoryModel } from './inventory.model';
import { StatsModel } from './stats.model';

describe('battleground', () => {
    let service: AdventurerModel;

    beforeEach(() => {
        const stats = new StatsModel({
            charisma: 9,
            constitution: 9,
            dexterity: 9,
            intelligence: 9,
            strength: 9,
            wisdom: 9,
        });
        // Create Item constructor

        const item1 = createItem<ArmorItem<typeof stats>>({
            armorPoints: 12,
            name: 'Leather Armor',
            cost: 10,
            weight: 2,
            category: ArmorCategories.Light,
            armorPointsModifier(armorEntity) {
                return armorEntity.deriveModifier('dexterity');
            },
        });
        const item2 = {};

        const inventory = new InventoryModel([item1]);

        const adventurer = new AdventurerModel(stats, inventory);
    });

    // it('should work', () => {});
});
