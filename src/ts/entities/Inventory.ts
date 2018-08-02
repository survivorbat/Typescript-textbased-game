import { IInventory } from "../abstract/entities/IInventory";
import { injectable } from "../../../node_modules/inversify";
import { IObject } from "../abstract/entities/IObject";

@injectable()
export class Inventory implements IInventory {
    public objects: Array<IObject> = new Array<IObject>()
    public maxObjects: number = 5

    public addObject(object: IObject): boolean {
        return false
    }  

    public removeObject(object: IObject): boolean {
        return false
    }

    public toString(): string {
        return this.objects.toString()
    }
}