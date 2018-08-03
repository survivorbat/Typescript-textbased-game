import { ICommand } from "./ICommand";
import { CommandType } from "../../constants/CommandTypes";

export interface ICommandFactory {
    getInstanceFromType(commandName: CommandType): ICommand
}