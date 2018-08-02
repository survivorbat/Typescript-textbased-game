import { IInputHandler } from "../abstract/utils/IInputHandler";
import { ICommand } from "../abstract/utils/ICommand";
import { injectable, inject } from "../../../node_modules/inversify";
import { ICommandHandler } from "../abstract/utils/ICommandHandler";
import { TYPES } from "../constants/types";
import { Command } from "./Command";

@injectable()
export class InputHandler implements IInputHandler {
    private inputBuffer: Array<ICommand> = new Array<ICommand>()
    private commandHandler: ICommandHandler
    private _shouldAutoClearBuffer: boolean = true
    private commandHistory: Array<ICommand> = new Array<ICommand>()
    private _commandHistoryPosition: number = 0

    constructor(
        @inject(TYPES.CommandHandler) commandHandler: ICommandHandler
    ) {
        this.commandHandler = commandHandler
    }

    get shouldAutoClearBuffer(): boolean { return this._shouldAutoClearBuffer}

    set shouldAutoClearBuffer(shouldAutoClearBuffer: boolean) {this._shouldAutoClearBuffer = shouldAutoClearBuffer}

    get commandHistoryPosition(): number {return this._commandHistoryPosition}

    public addCommand(input: ICommand): void {
        this.inputBuffer.push(input)
        this.commandHistory.push(input)
        this._commandHistoryPosition = this.commandHistory.length
    }

    public getCommand(position: number): ICommand {
        if(position < 0) {
            this._commandHistoryPosition = this.commandHistory.length
            return new Command("")
        } else if(position > this.commandHistory.length) {
            this._commandHistoryPosition = this.commandHistory.length
            return new Command("")
        }
        this._commandHistoryPosition = position
        return this.commandHistory[this._commandHistoryPosition];
    }

    public clearBuffer(): void {
        this.inputBuffer = new Array<ICommand>()
    }

    public execute(): void {
        this.inputBuffer.forEach((command: ICommand) => {
            this.commandHandler.executeCommand(command)
        })
        if(this.shouldAutoClearBuffer) { this.clearBuffer() }
    }
}