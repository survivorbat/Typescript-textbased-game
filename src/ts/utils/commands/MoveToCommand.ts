import { Command } from "../Command";

export class MoveToCommand extends Command {
    execute(): void {
        const room = this.roomManager.getRoom(this.defaultArguments)
        if(!room) {
            return this.outputHandler.println(404, "WARNING: Unknown location")
        }
        if(!this.roomManager.moveToRoom(room)) {
            return this.outputHandler.println(422, "WARNING: Unable to move to this room")
        }
    }
}