import { IInventory } from "../abstract/entities/IInventory";
import { injectable } from "../../../node_modules/inversify";
import { IItem } from "../abstract/entities/IItem";

@injectable()
export class Inventory implements IInventory {
    public items: Array<IItem> = new Array<IItem>()
    public maxItems: number = 5

    public addItem(item: IItem): boolean {
        return false
    }  

    public removeItem(item: IItem): boolean {
        return false
    }

    public toString(): string {
        return this.items.toString()
    }
}