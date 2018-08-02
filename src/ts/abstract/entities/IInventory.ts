import { IItem } from "./IItem";

export interface IInventory {
    items: Array<IItem>
    maxItems: number
    addItem(item: IItem): boolean
    removeItem(item: IItem): boolean
    toString(): string
}