import { Command } from "../Command";

export class PingCommand extends Command {
    execute(): void {
        this.outputHandler.println(200, "Pong!")
    }
}