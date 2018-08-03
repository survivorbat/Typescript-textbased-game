import { Command } from "../Command";

export class PickupCommand extends Command {
    execute(): void {
        if(!this.player.location) {
            return this.outputHandler.println(404, "WARNING: Unknown location")
        }
        
        const object: IItem | null = this.player.location.getItemByName(command.arguments)
        if(object) {
            if(this.inventoryManager.addItem(object)) {
                this.player.location.removeItem(object)
                return this.outputHandler.println(201, "Added item to inventory!")
            }
            this.outputHandler.setNextLineTextColor(COLORS.YELLOW)
            this.outputHandler.println(422, `Warning: ${object.getPickupMessage()}`)
            return this.outputHandler.setNextLineTextColor(COLORS.LIGHTGREEN)
        }
        return this.outputHandler.println(404, "WARNING: Object not found")
    }
}