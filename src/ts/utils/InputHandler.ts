import { IInputHandler } from "../abstract/utils/IInputHandler";
import { ICommand } from "../abstract/utils/ICommand";
import { injectable, inject } from "../../../node_modules/inversify";
import { TYPES } from "../constants/types";
import { IOutputHandler } from "../abstract/utils/IOutputHandler";
import { UnknownCommand } from "./commands/UnknownCommand";

@injectable()
export class InputHandler implements IInputHandler {

    private inputBuffer: Array<ICommand> = new Array<ICommand>()
    public shouldAutoClearBuffer: boolean = true
    public commandHistory: Array<string> = new Array<string>()
    public commandHistoryPosition: number = 0

    /**
     * @param input command that needs to be added
     */
    public addCommand(input: ICommand, inputAsText: string): void {
        this.inputBuffer.push(input)
        this.commandHistory.push(inputAsText)
        this.commandHistoryPosition = this.commandHistory.length
    }

    /**
     * @param position of which you want the command
     * @returns command
     */
    public getCommand(position: number): string {
        if(position < 0) {
            this.commandHistoryPosition = this.commandHistory.length
            return ""
        } else if(position > this.commandHistory.length) {
            this.commandHistoryPosition = this.commandHistory.length
            return ""
        }
        this.commandHistoryPosition = position
        return this.commandHistory[this.commandHistoryPosition];
    }

    /**
     * Clears the buffer
     */
    public clearBuffer(): void {
        this.inputBuffer = new Array<ICommand>()
    }

    /**
     * Execute commands
     */
    public execute(): void {
        this.inputBuffer.forEach((command: ICommand) => {
            command.execute()
        })
        if(this.shouldAutoClearBuffer) { this.clearBuffer() }
    }
}