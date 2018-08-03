import { IItem } from "../abstract/entities/IItem";

export abstract class Item implements IItem {

    // Item code
    itemCode: string

    // Name of the item
    itemName: string

    // Pickupable?
    pickupable: boolean = false

    // Info on the item
    info?: string
    
    /**
     * Construct an item
     * @param itemCode
     * @param itemName
     */
    constructor(itemCode: string, itemName: string) {
        this.itemCode = itemCode
        this.itemName = itemName
    }

    /**
     * Get message that is returned on picking up an item
     * @returns a string
     */
    public abstract getPickupMessage(): string 

    /**
     * Use the item
     */
    abstract use(): void 
    /**
     * Break the item
     */
    abstract break(): void
}
