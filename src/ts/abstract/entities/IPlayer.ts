import { IRoom } from "./IRoom";
import { IItem } from "./IItem";
import { IInventoryManager } from "../utils/IInventoryManager";

export interface IPlayer {
    location?: IRoom
    inventoryManager: IInventoryManager
    pickupItem(item: IItem): boolean
}