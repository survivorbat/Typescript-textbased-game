import { ICommandHandler } from "../abstract/utils/ICommandHandler";
import { ICommand } from "../abstract/utils/ICommand";
import { IOutputHandler } from "../abstract/utils/IOutputHandler";
import { injectable, inject } from "../../../node_modules/inversify";
import { TYPES } from "../constants/types";
import { COLORS } from "../constants/Colors";
import { IInventoryManager } from "../abstract/utils/IInventoryManager";
import { IPlayer } from "../abstract/entities/IPlayer";
import { IItem } from "../abstract/entities/IItem";
import { IRoomManager } from "../abstract/utils/IRoomManager";

@injectable()
export class CommandHandler implements ICommandHandler {
    // Outputhandler
    private outputHandler: IOutputHandler

    // Inventorymanager
    private inventoryManager: IInventoryManager

    // Player
    private player: IPlayer

    // Roommanager
    private roomManager: IRoomManager

    /**
     * @param outputHandler the outputhandler
     * @param inventoryManager the inventorymanager
     * @param player the player
     */
    constructor(
        @inject(TYPES.OutputHandler) outputHandler: IOutputHandler, 
        @inject(TYPES.InventoryManager) inventoryManager: IInventoryManager, 
        @inject(TYPES.Player) player: IPlayer,
        @inject(TYPES.RoomManager) roomManager: IRoomManager
    ) {
        this.outputHandler = outputHandler
        this.inventoryManager = inventoryManager
        this.player = player
        this.roomManager = roomManager
    }

    /**
     * @param command the command that needs to be executed
     */
    public executeCommand(command: ICommand): void {
        switch(command.command.toLowerCase()) {
            case "ping":
                this.outputHandler.println(200, "Pong!")
                break
            case "inventory": 
                this.outputHandler.println(200, `Inventory (${this.inventoryManager.getAmountOfItems()}/${this.inventoryManager.getMaxItems()}): ${this.inventoryManager.toString()}`)
                break
            case "location":
                this.outputHandler.println(200, `Player location: ${this.player.location? this.player.location.roomName : "Unknown"}`)
                break
            case "help": 
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
                break
            case "doors":
                if(!this.player.location) {
                    return this.outputHandler.println(404, "WARNING: Unknown location")
                }
                this.outputHandler.println(200, `There are ${this.player.location.getAmountOfAdjacentRooms()} doors that lead to: ${this.player.location.getAdjacentRoomNames()}`)
                break
            case "observe":
                if(this.player.location) {
                    this.outputHandler.println(200, `You observe the following items: ${this.player.location.getItemNames()}, there also are ${this.player.location.getAmountOfAdjacentRooms()} door(s)`)
                } else {
                    this.outputHandler.setNextLineTextColor(COLORS.YELLOW)
                    this.outputHandler.println(404, "WARNING: Unknown location")
                    this.outputHandler.setNextLineTextColor(COLORS.LIGHTGREEN)
                }
                break
            case "moveto":
                const room = this.roomManager.getRoom(command.arguments)
                if(!room) {
                    return this.outputHandler.println(404, "WARNING: Unknown location")
                }
                if(!this.roomManager.moveToRoom(room)) {
                    return this.outputHandler.println(422, "WARNING: Unable to move to this room")
                }
                break
            case "clear":
                this.outputHandler.clear()
                break
            case "pickup":
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
            case "use": {
                if(!this.player.location) {
                    return this.outputHandler.println(404, "WARNING: Unknown location")
                }
                const object: IItem | null = this.player.location.getItemByName(command.arguments)
                if(object) {
                    object.use()
                }
                return this.outputHandler.println(404, "WARNING: Object not found")
            }
            default:
                this.outputHandler.setNextLineTextColor(COLORS.YELLOW)
                this.outputHandler.println(400, `WARNING: Unknown command: ${command.command}, use the help command in order to see a list of commands`)
                this.outputHandler.setNextLineTextColor(COLORS.LIGHTGREEN)
        }
    }
}