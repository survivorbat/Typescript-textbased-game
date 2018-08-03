import { Command } from "../Command";

export class HelpCommand extends Command {
    execute(): void {
        this.outputHandler.println(100, "Available commands:")
        this.outputHandler.println(100, "---------------------------------------------")
        this.outputHandler.println(100, "help - Get a list of commands")
        this.outputHandler.println(100, "inventory - View your current inventory")
        this.outputHandler.println(100, "doors - Get a list adjacent rooms")
        this.outputHandler.println(100, "ping - pong")
        this.outputHandler.println(100, "location - Get your current location")
        this.outputHandler.println(100, "observe - Observe the current location")
        this.outputHandler.println(100, "clear - Clear screen")
        this.outputHandler.println(100, "")
        this.outputHandler.println(100, "moveto <roomname> - Move to an adjacent room")
        this.outputHandler.println(100, "pickup <item> - Attempt to pickup an item")
        this.outputHandler.println(100, "use <item> - Attempt to use an item")
        this.outputHandler.println(200, "---------------------------------------------")
    }
}