import { IInventoryManager } from "../abstract/utils/IInventoryManager";
import { IInventory } from "../abstract/entities/IInventory";
import { inject } from "inversify"
import { TYPES } from "../constants/Types";
import { injectable } from "../../../node_modules/inversify";
import { IItem } from "../abstract/entities/IItem";

@injectable()
export class InventoryManager implements IInventoryManager {
    private inventory: IInventory
    constructor(
        @inject(TYPES.Inventory) inventory: IInventory
    ) {
        this.inventory = inventory
    }

    setMaxItems(amount: number): void {
        this.inventory.maxItems = amount
    }

    getMaxItems(): number {
        return this.inventory.maxItems
    }

    getAmountOfItems(): number {
        return this.inventory.items.length
    }

    getItems(): Array<IItem> {
        return this.inventory.items
    }
    addItem(item: IItem): boolean {
        return  this.inventory.addItem(item)
    }
    removeItem(item: IItem): boolean {
        return this.inventory.removeItem(item)
    }
    isInInventory(itemCode: string): boolean {
        return this.inventory.items.map((item: IItem) => item.itemCode).includes(itemCode)
    }
    toString(): string {
        return this.inventory.toString()
    }
}