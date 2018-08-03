import { Command } from "../Command";

export class DoorsCommand extends Command {
    execute(): void {
        if(!this.player.location) {
            return this.outputHandler.println(404, "WARNING: Unknown location")
        }
        this.outputHandler.println(200, `There are ${this.player.location.getAmountOfAdjacentRooms()} doors that lead to: ${this.player.location.getAdjacentRoomNames()}`)
    }
}