import { IItem } from "../abstract/entities/IItem";

export abstract class Item implements IItem {
    itemCode: string
    itemName: string
    info?: string
    
    constructor(itemCode: string, itemName: string) {
        this.itemCode = itemCode
        this.itemName = itemName
    }

    public abstract getPickupMessage(): string 

    use(): void {

    }
    break(): void {

    }
    pickup(): boolean {
        return false
    }
}
