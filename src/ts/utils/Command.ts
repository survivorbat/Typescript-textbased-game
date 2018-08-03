import { ICommand } from "../abstract/utils/ICommand"
import { IOutputHandler } from "../abstract/utils/IOutputHandler";
import { inject } from "../../../node_modules/inversify";
import { TYPES } from "../constants/Types";
import { IInventoryManager } from "../abstract/utils/IInventoryManager";
import { IRoomManager } from "../abstract/utils/IRoomManager";
import { IPlayer } from "../abstract/entities/IPlayer";

export abstract class Command implements ICommand {
    public defaultArguments: string = ""

    protected outputHandler: IOutputHandler
    protected inventoryManager: IInventoryManager
    protected roomManager: IRoomManager
    protected player: IPlayer

    constructor(
        @inject(TYPES.OutputHandler) outputHandler: IOutputHandler,
        @inject(TYPES.InventoryManager) inventoryManager: IInventoryManager,
        @inject(TYPES.RoomManager) roomManager: IRoomManager,
        @inject(TYPES.Player) player: IPlayer
    ) {
        this.outputHandler = outputHandler
        this.inventoryManager = inventoryManager
        this.roomManager = roomManager
        this.player = player
    }

    abstract execute(): void
}