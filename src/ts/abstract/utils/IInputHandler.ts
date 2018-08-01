import { ICommand } from "./ICommand";
import { IOutputHandler } from "./IOutputHandler";

export interface IInputHandler {
    commandHistoryPosition: number

    addCommand(input: ICommand): void
    clearBuffer(): void
    execute(): void
    getCommand(position: number): ICommand
}