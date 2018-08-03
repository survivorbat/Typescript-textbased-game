import { Command } from "../Command";

export class LocationCommand extends Command {
    execute(): void {
        this.outputHandler.println(200, `Player location: ${this.player.location? this.player.location.roomName : "Unknown"}`)
    }
}