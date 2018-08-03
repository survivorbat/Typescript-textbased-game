import { ICommand } from "../abstract/utils/ICommand";
import { ICommandFactory } from "../abstract/utils/ICommandFactory";
import { CommandType } from "../constants/CommandTypes";
import { UseCommand } from "./commands/UseCommand";
import { PingCommand } from "./commands/PingCommand";
import { Command } from "./Command";
import { DoorsCommand } from "./commands/DoorsCommand";
import { MoveToCommand } from "./commands/MoveToCommand";
import { ObserveCommand } from "./commands/ObserveCommand";
import { PickupCommand } from "./commands/PickupCommand";
import { LocationCommand } from "./commands/LocationCommand";
import { InventoryCommand } from "./commands/InventoryCommand";
import { HelpCommand } from "./commands/HelpCommand";
import { injectable } from "../../../node_modules/inversify";
import { UnknownCommand } from "./commands/UnknownCommand";

@injectable()
export class CommandFactory implements ICommandFactory {
    getInstanceFromType(commandName: CommandType): ICommand {
        switch (commandName) {
            case CommandType.use:
                return new UseCommand
            case CommandType.ping:
                return new PingCommand
            case CommandType.doors:
                return new DoorsCommand
            case CommandType.clear:
                return new PingCommand
            case CommandType.moveto:
                return new MoveToCommand
            case CommandType.observe:
                return new ObserveCommand
            case CommandType.pickup:
                return new PickupCommand
            case CommandType.location:
                return new LocationCommand
            case CommandType.inventory:
                return new InventoryCommand
            case CommandType.help:
                return new HelpCommand
            default:
                return new UnknownCommand
        }
    }
}