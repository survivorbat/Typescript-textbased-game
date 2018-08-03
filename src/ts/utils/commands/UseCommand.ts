import { Command } from "../Command";

export class UseCommand extends Command {
    execute(): void {
        if(!this.player.location) {
            return this.outputHandler.println(404, "WARNING: Unknown location")
        }
        const object: IItem | null = this.player.location.getItemByName(command.arguments)
        if(object) {
            object.use()
        }
        return this.outputHandler.println(404, "WARNING: Object not found")
    }
}