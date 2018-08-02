import { IPlayer } from "../abstract/entities/IPlayer";
import { injectable, inject } from "../../../node_modules/inversify";
import { IRoom } from "../abstract/entities/IRoom";
import { IInventory } from "../abstract/entities/IInventory";
import { TYPES } from "../constants/Types";

@injectable()
export class Player implements IPlayer {
    // Current room
    public location?: IRoom
    // Inventory singleton
    public inventory: IInventory

    /**
     * @param inventory inventory singleton
     */
    constructor(
        @inject(TYPES.Inventory) inventory: IInventory
    ) {
        this.inventory = inventory
    }
}