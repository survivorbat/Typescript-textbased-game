import { Command } from "../Command";

export class ClearCommand extends Command {
    execute(): void {
        this.outputHandler.clear()
    }
}