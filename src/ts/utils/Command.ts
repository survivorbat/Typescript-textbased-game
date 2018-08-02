import { ICommand } from "../abstract/utils/ICommand";

export class Command implements ICommand {
    private readonly _commandAsText: string
    private readonly _command: string
    private readonly _arguments: string = ""
    
    constructor(commandAsText: string) {
        this._commandAsText = commandAsText
        const splitInput = commandAsText.split(' ')
        this._command = splitInput[0]
        delete splitInput[0]
        if(splitInput.length > 1) {
            this._arguments = splitInput.join('')
        }
    }

    get commandAsText(): string {
        return this._commandAsText
    }

    get command(): string {
        return this._command
    }

    get arguments(): string {
        return this._arguments
    }
}