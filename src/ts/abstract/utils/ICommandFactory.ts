import { ICommand } from "./ICommand";

export interface ICommandFactory {
    getCommandFromString(command: string): ICommand;
}