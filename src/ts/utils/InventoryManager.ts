import { IInventoryManager } from "../abstract/utils/IInventoryManager";
import { IInventory } from "../abstract/entities/IInventory";
import { inject } from "inversify"
import { TYPES } from "../constants/Types";
import { injectable } from "../../../node_modules/inversify";
import { IObject } from "../abstract/entities/IObject";

@injectable()
export class InventoryManager implements IInventoryManager {
    private inventory: IInventory
    constructor(@inject(TYPES.Inventory) inventory: IInventory) {
        this.inventory = inventory
    }

    getObjects(): Array<IObject> {
        return this.inventory.objects
    }
    addObject(object: IObject): boolean {
        return  this.inventory.addObject(object)
    }
    removeObject(object: IObject): boolean {
        return this.inventory.removeObject(object)
    }
    isInInventory(itemCode: string): boolean {
        return this.inventory.objects.map((object: IObject) => object.itemCode).includes(itemCode)
    }
    toString(): string {
        return this.inventory.toString()
    }
}