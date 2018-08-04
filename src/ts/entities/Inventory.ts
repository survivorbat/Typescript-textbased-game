import { IInventory } from "../abstract/entities/IInventory";
import { injectable } from "../../../node_modules/inversify";
import { IItem } from "../abstract/entities/IItem";

@injectable()
export class Inventory implements IInventory {
    // Array of items
    public items: Array<IItem> = new Array<IItem>()
    
    // Inventory size
    public maxItems: number = 2

    /**
     * Add item to the inventory
     * @param item
     * @returns true or false
     */
    public addItem(item: IItem): boolean {
        if(!this.isInventoryFull()) {
            this.items.push(item)
            return true
        }
        return false
    }  

    /**
     * Remove item from the inventory
     * @param item
     * @returns true or false 
     */
    public removeItem(item: IItem): boolean {
        return false
    }

    /**
     * @returns string with all the inventory items
     */
    public toString(): string {
        return this.items.toString()
    }

    /**
     * @returns whether inventory is full or not
     */
    private isInventoryFull(): boolean {
        return this.items.length >= this.maxItems
    }
}