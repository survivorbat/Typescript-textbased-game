import { ICommand } from "../abstract/utils/ICommand";
import { IOutputHandler } from "../abstract/utils/IOutputHandler";
import { injectable, inject } from "../../../node_modules/inversify";
import { TYPES } from "../constants/types";
import { COLORS } from "../constants/Colors";
import { IInventoryManager } from "../abstract/utils/IInventoryManager";
import { IPlayer } from "../abstract/entities/IPlayer";
import { IItem } from "../abstract/entities/IItem";
import { IRoomManager } from "../abstract/utils/IRoomManager";
import { CommandType } from "../constants/CommandTypes";
import { ICommandHandler } from "../abstract/utils/ICommandHandler";

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
        switch(command.command) {
            case CommandType.ping:
                this.outputHandler.println("Pong!")
                break
            case CommandType.inventory: 
                this.outputHandler.println(`Inventory (${this.inventoryManager.getAmountOfItems()}/${this.inventoryManager.getMaxItems()}): ${this.inventoryManager.toString()}`)
                break
            case CommandType.location:
                this.outputHandler.println(`Player location: ${this.player.location? this.player.location.roomName : "Unknown"}`)
                break
            case CommandType.help: 
                this.outputHandler.println("Available commands:")
                this.outputHandler.println("---------------------------------------------")
                this.outputHandler.println("help - Get a list of commands")
                this.outputHandler.println("inventory - View your current inventory")
                this.outputHandler.println("doors - Get a list adjacent rooms")
                this.outputHandler.println("ping - pong")
                this.outputHandler.println("location - Get your current location")
                this.outputHandler.println("observe - Observe the current location")
                this.outputHandler.println("clear - Clear screen")
                this.outputHandler.println("")
                this.outputHandler.println("moveto <roomname> - Move to an adjacent room")
                this.outputHandler.println("pickup <item> - Attempt to pickup an item")
                this.outputHandler.println("use <item> - Attempt to use an item")
                this.outputHandler.println("---------------------------------------------")
                break
            case CommandType.doors:
                if(!this.player.location) {
                    return this.outputHandler.println("Unknown location")
                }
                this.outputHandler.println(`There are ${this.player.location.getAmountOfAdjacentRooms()} doors that lead to: ${this.player.location.getAdjacentRoomNames()}`)
                break
            case CommandType.observe:
                if(this.player.location) {
                    this.outputHandler.println(`You observe the following items: ${this.player.location.getItemNames()} and ${this.player.location.getAmountOfAdjacentRooms()} door(s)`)
                } else {
                    this.outputHandler.setNextLineTextColor(COLORS.YELLOW)
                    this.outputHandler.println("Unknown location")
                    this.outputHandler.setNextLineTextColor(COLORS.LIGHTGREEN)
                }
                break
            case CommandType.moveto:
                const room = this.roomManager.getRoom(command.arguments)
                if(!room) {
                    return this.outputHandler.println("Unknown location")
                }
                if(!this.roomManager.moveToRoom(room)) {
                    return this.outputHandler.println("Unable to move to this room")
                }
                break
            case CommandType.clear:
                this.outputHandler.clear()
                break
            case CommandType.pickup:
                if(!this.player.location) {
                    return this.outputHandler.println("Unknown location")
                }
                
                const object: IItem | null = this.player.location.getItemByName(command.arguments)
                if(object) {
                    if(this.inventoryManager.addItem(object)) {
                        this.player.location.removeItem(object)
                        return this.outputHandler.println("Added item to inventory!")
                    }
                    this.outputHandler.setNextLineTextColor(COLORS.YELLOW)
                    this.outputHandler.println(`Warning: ${this.getRandomMessage(object.getPickupMessages())}`)
                    return this.outputHandler.setNextLineTextColor(COLORS.LIGHTGREEN)
                }
                return this.outputHandler.println("Object not found")
            case CommandType.use: {
                if(!this.player.location) {
                    return this.outputHandler.println("Unknown location")
                }
                const object: IItem | null = this.player.location.getItemByName(command.arguments)
                if(object) {
                    object.use()
                }
                return this.outputHandler.println("Object not found")
            }
            default:
                this.outputHandler.setNextLineTextColor(COLORS.YELLOW)
                this.outputHandler.println(`Unknown command, use the help command in order to see a list of commands`)
                this.outputHandler.setNextLineTextColor(COLORS.LIGHTGREEN)
        }
    }

    private getRandomMessage(messages: Array<string>): string {
        return messages[Math.round(Math.random()*messages.length)]
    }
}