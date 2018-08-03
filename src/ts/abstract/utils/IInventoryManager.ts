import { IItem } from "../entities/IItem";

export interface IInventoryManager {
    getMaxItems(): number
    setMaxItems(amount: number): void
    getAmountOfItems(): number
    getItems(): Array<IItem>
    addItem(item: IItem): boolean
    removeItem(item: IItem): boolean
    isInInventory(itemName: string): boolean
    toString(): string
}