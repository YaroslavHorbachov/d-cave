import { Item } from '../interfaces/item.interface';

export class InventoryModel {
    constructor(public readonly items: Item[]) {}

    public get totalWeight(): number {
        return this.items.reduce((baseTotalWeight, item) => {
            return baseTotalWeight + item.weight;
        }, 0);
    }

    public get totalCost(): number {
        return this.items.reduce((baseTotalCost, item) => {
            return baseTotalCost + item.cost;
        }, 0);
    }
}
