import { IPlayer } from "../abstract/entities/IPlayer";
import { injectable, inject } from "../../../node_modules/inversify";
import { IRoom } from "../abstract/entities/IRoom";
import { IInventory } from "../abstract/entities/IInventory";
import { TYPES } from "../constants/Types";
import { IInventoryManager } from "../abstract/utils/IInventoryManager";
import { IItem } from "../abstract/entities/IItem";

@injectable()
export class Player implements IPlayer {
    // Current room
    public location?: IRoom

    constructor(
        @inject(TYPES.Inventory) private inventory: IInventory,
        @inject(TYPES.InventoryManager) public inventoryManager: IInventoryManager
    ) {}

    public pickupItem(item: IItem): boolean {
        return this.inventoryManager.addItem(item)
    }
}