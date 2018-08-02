import { IObject } from "../entities/IObject";

export interface IInventoryManager {
    getObjects(): Array<IObject>
    addObject(object: IObject): boolean
    removeObject(object: IObject): boolean
    isInInventory(itemCode: string): boolean
    toString(): string
}