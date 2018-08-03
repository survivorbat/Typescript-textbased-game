import { Command } from "../Command";

export class ObserveCommand extends Command {
    execute(): void {
        if(this.player.location) {
            this.outputHandler.println(200, `You observe the following items: ${this.player.location.getItemNames()}, there also are ${this.player.location.getAmountOfAdjacentRooms()} door(s)`)
        } else {
            this.outputHandler.setNextLineTextColor(COLORS.YELLOW)
            this.outputHandler.println(404, "WARNING: Unknown location")
            this.outputHandler.setNextLineTextColor(COLORS.LIGHTGREEN)
        }
    }
}