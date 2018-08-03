import { ICommand } from "../abstract/utils/ICommand"

export abstract class Command implements ICommand {
    // The rest of the command
    private _defaultArguments: string = ""

    protected test: string = ""

    /**
     * @returns arguments
     */
    get defaultArguments(): string {
        return this._defaultArguments
    }

    abstract execute(): void

    public setDefaultArguments(args: string): void {
        this._defaultArguments = args
    }
}