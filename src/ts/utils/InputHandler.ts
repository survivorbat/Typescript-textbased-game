import { IInputHandler } from "../abstract/utils/IInputHandler";
import { ICommand } from "../abstract/utils/ICommand";
import { injectable, inject } from "../../../node_modules/inversify";
import { TYPES } from "../constants/types";
import { IOutputHandler } from "../abstract/utils/IOutputHandler";
import { UnknownCommand } from "./commands/UnknownCommand";

@injectable()
export class InputHandler implements IInputHandler {
    // Inputbuffer, basically an array of commands
    private inputBuffer: Array<ICommand> = new Array<ICommand>()

    // If the buffer should be cleared after executing commands
    private _shouldAutoClearBuffer: boolean = true

    // History of commands
    private commandHistory: Array<ICommand> = new Array<ICommand>()

    // Current position
    private _commandHistoryPosition: number = 0

    // Outputhandler to put out commands
    private outputHandler: IOutputHandler

    /**
     * @param commandHandler the handler for the commands
     */
    constructor(
        @inject(TYPES.OutputHandler) outputHandler: IOutputHandler
    ) {
        this.outputHandler = outputHandler
    }

    /**
     * @returns boolean 
     */
    get shouldAutoClearBuffer(): boolean { return this._shouldAutoClearBuffer}

    /**
     * @param shouldAutoClearBuffer boolean whether the buffer should be cleared
     */
    set shouldAutoClearBuffer(shouldAutoClearBuffer: boolean) {this._shouldAutoClearBuffer = shouldAutoClearBuffer}

    /**
     * @returns command history position
     */
    get commandHistoryPosition(): number {return this._commandHistoryPosition}

    /**
     * @param input command that needs to be added
     */
    public addCommand(input: ICommand): void {
        this.inputBuffer.push(input)
        this.commandHistory.push(input)
        this._commandHistoryPosition = this.commandHistory.length
    }

    /**
     * @param position of which you want the command
     * @returns command
     */
    public getCommand(position: number): ICommand {
        if(position < 0) {
            this._commandHistoryPosition = this.commandHistory.length
            return new UnknownCommand()
        } else if(position > this.commandHistory.length) {
            this._commandHistoryPosition = this.commandHistory.length
            return new UnknownCommand()
        }
        this._commandHistoryPosition = position
        return this.commandHistory[this._commandHistoryPosition];
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