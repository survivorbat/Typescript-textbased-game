import { ICommandHandler } from "../abstract/utils/ICommandHandler";
import { ICommand } from "../abstract/utils/ICommand";
import { IOutputHandler } from "../abstract/utils/IOutputHandler";
import { injectable, inject } from "../../../node_modules/inversify";
import { TYPES } from "../constants/types";
import { COLORS } from "../constants/Colors";
import { IInventoryManager } from "../abstract/utils/IInventoryManager";
import { IPlayer } from "../abstract/entities/IPlayer";

@injectable()
export class CommandHandler implements ICommandHandler {
    private outputHandler: IOutputHandler
    private inventoryManager: IInventoryManager
    private player: IPlayer

    constructor(@inject(TYPES.OutputHandler) outputHandler: IOutputHandler, @inject(TYPES.InventoryManager) inventoryManager: IInventoryManager, @inject(TYPES.Player) player: IPlayer) {
        this.outputHandler = outputHandler
        this.inventoryManager = inventoryManager
        this.player = player
    }

    public executeCommand(command: ICommand): void {
        switch(command.command.toLowerCase()) {
            case "ping":
                this.outputHandler.println(200, "Pong!")
                break
            case "inventory": 
                this.outputHandler.println(200, `Inventory: ${this.inventoryManager.toString()}`)
                break
            case "location":
                this.outputHandler.println(200, `Player location: ${this.player.location? this.player.location.roomName : "Unknown"}`)
                break
            case "help": 
                this.outputHandler.println(200, "Available commands: ping, inventory, location, observe, help")
                break
            case "observe":
                if(this.player.location) {
                    this.outputHandler.println(200, `You observe the following items: ${this.player.location.objects}`)
                } else {
                    this.outputHandler.setNextLineTextColor(COLORS.YELLOW)
                    this.outputHandler.println(400, "WARNING: Unknown location")
                    this.outputHandler.setNextLineTextColor(COLORS.LIGHTGREEN)
                }
                break
            case "use":
                
                break
            default:
                this.outputHandler.setNextLineTextColor(COLORS.YELLOW)
                this.outputHandler.println(400, "WARNING: Unknown command, use the help command in order to see a list of commands")
                this.outputHandler.setNextLineTextColor(COLORS.LIGHTGREEN)
        }
    }
}