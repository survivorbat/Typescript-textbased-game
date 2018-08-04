import { ICommand } from "../abstract/utils/ICommand";
import { CommandType, getCommandTypeFromString } from "../constants/CommandTypes";

export class Command implements ICommand {
    private readonly _command: CommandType

    private readonly _arguments: string = ""
    
    constructor(
        private readonly _commandAsText: string
    ) {
        const splitInput = _commandAsText.split(' ')
        this._command = getCommandTypeFromString(splitInput[0])
        delete splitInput[0]
        if(splitInput.length > 1) {
            this._arguments = splitInput.join(' ').trim().toLowerCase()
        }
    }

    get commandAsText(): string {
        return this._commandAsText
    }

    get command(): CommandType {
        return this._command
    }

    get arguments(): string {
        return this._arguments
    }
}