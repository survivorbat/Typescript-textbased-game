import { Command } from "../Command";
import { IItem } from "../../abstract/entities/IItem";

export class UseCommand extends Command {
    execute(): void {
        if(!this.player.location) {
            return this.outputHandler.println(404, "WARNING: Unknown location")
        }
        const object: IItem | null = this.player.location.getItemByName(this.defaultArguments)
        if(object) {
            object.use()
        }
        return this.outputHandler.println(404, "WARNING: Object not found")
    }
}