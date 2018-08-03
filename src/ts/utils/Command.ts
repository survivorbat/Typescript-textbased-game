import { ICommand } from "../abstract/utils/ICommand";
import { CommandType, getCommandTypeFromString } from "../constants/CommandTypes";

export class Command implements ICommand {
    // Command in text format
    private readonly _commandAsText: string

    // The first word of the command
    private readonly _command: CommandType

    // The rest of the command
    private readonly _arguments: string = ""
    
    /**
     * @param commandAsText the command
     */
    constructor(commandAsText: string) {
        this._commandAsText = commandAsText
        const splitInput = commandAsText.split(' ')
        this._command = getCommandTypeFromString(splitInput[0])
        delete splitInput[0]
        if(splitInput.length > 1) {
            this._arguments = splitInput.join(' ').trim()
        }
    }

    /**
     * @returns command as text
     */
    get commandAsText(): string {
        return this._commandAsText
    }

    /**
     * @returns command
     */
    get command(): CommandType {
        return this._command
    }

    /**
     * @returns arguments
     */
    get arguments(): string {
        return this._arguments
    }
}