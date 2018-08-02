import { IObject } from "./IObject";

export interface IInventory {
    objects: Array<IObject>
    maxObjects: number
    addObject(item: IObject): boolean
    removeObject(item: IObject): boolean
    toString(): string
}