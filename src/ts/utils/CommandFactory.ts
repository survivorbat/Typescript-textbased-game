import { ICommand } from "../abstract/utils/ICommand";
import { ICommandFactory } from "../abstract/utils/ICommandFactory";
import { CommandType } from "../constants/CommandTypes";
import { UseCommand } from "./commands/UseCommand";
import { PingCommand } from "./commands/PingCommand";
import { DoorsCommand } from "./commands/DoorsCommand";
import { MoveToCommand } from "./commands/MoveToCommand";
import { ObserveCommand } from "./commands/ObserveCommand";
import { PickupCommand } from "./commands/PickupCommand";
import { LocationCommand } from "./commands/LocationCommand";
import { InventoryCommand } from "./commands/InventoryCommand";
import { HelpCommand } from "./commands/HelpCommand";
import { injectable, inject } from "../../../node_modules/inversify";
import { UnknownCommand } from "./commands/UnknownCommand";
import { TYPES } from "../constants/Types";
import { IPlayer } from "../abstract/entities/IPlayer";
import { IOutputHandler } from "../abstract/utils/IOutputHandler";
import { IRoomManager } from "../abstract/utils/IRoomManager";
import { IInventoryManager } from "../abstract/utils/IInventoryManager";
import { ClearCommand } from "./commands/ClearCommand";

@injectable()
export class CommandFactory implements ICommandFactory {

    private useCommand: ICommand
    private pingCommand: ICommand
    private doorsCommand: ICommand
    private clearcommand: ICommand
    private moveToCommand: ICommand
    private observeCommand: ICommand
    private pickupCommand: ICommand
    private locationCommand: ICommand
    private inventoryCommand: ICommand
    private helpCommand: ICommand
    private unknownCommand: ICommand

    constructor(
        @inject(TYPES.Player) player: IPlayer,
        @inject(TYPES.OutputHandler) outputHandler: IOutputHandler,
        @inject(TYPES.RoomManager) roomManager: IRoomManager,
        @inject(TYPES.InventoryManager) inventoryManager: IInventoryManager
    ) {
        this.useCommand = new UseCommand(outputHandler, inventoryManager, roomManager, player)
        this.inventoryCommand = new InventoryCommand(outputHandler, inventoryManager, roomManager, player)
        this.locationCommand = new LocationCommand(outputHandler, inventoryManager, roomManager, player)
        this.pickupCommand = new PickupCommand(outputHandler, inventoryManager, roomManager, player)
        this.helpCommand = new HelpCommand(outputHandler, inventoryManager, roomManager, player)
        this.unknownCommand = new UnknownCommand(outputHandler, inventoryManager, roomManager, player)
        this.observeCommand = new ObserveCommand(outputHandler, inventoryManager, roomManager, player)
        this.moveToCommand = new MoveToCommand(outputHandler, inventoryManager, roomManager, player)
        this.clearcommand = new ClearCommand(outputHandler, inventoryManager, roomManager, player)
        this.pingCommand = new PingCommand(outputHandler, inventoryManager, roomManager, player)
        this.doorsCommand = new DoorsCommand(outputHandler, inventoryManager, roomManager, player)
    }

    getInstanceFromType(commandName: CommandType): ICommand {
        switch (commandName) {
            case CommandType.use:
                return this.useCommand
            case CommandType.ping:
                return this.pingCommand
            case CommandType.doors:
                return this.doorsCommand
            case CommandType.clear:
                return this.clearcommand
            case CommandType.moveto:
                return this.moveToCommand
            case CommandType.observe:
                return this.observeCommand
            case CommandType.pickup:
                return this.pickupCommand
            case CommandType.location:
                return this.locationCommand
            case CommandType.inventory:
                return this.inventoryCommand
            case CommandType.help:
                return this.helpCommand
            default:
                return this.unknownCommand
        }
    }
}