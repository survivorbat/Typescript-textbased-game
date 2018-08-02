import { IPlayer } from "../abstract/entities/IPlayer";
import { injectable, inject } from "../../../node_modules/inversify";
import { IRoom } from "../abstract/entities/IRoom";
import { IInventory } from "../abstract/entities/IInventory";
import { TYPES } from "../constants/Types";

@injectable()
export class Player implements IPlayer {
    public location?: IRoom
    public inventory: IInventory

    constructor(
        @inject(TYPES.Inventory) inventory: IInventory
    ) {
        this.inventory = inventory
    }
}