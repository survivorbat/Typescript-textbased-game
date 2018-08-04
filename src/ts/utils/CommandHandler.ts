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

    constructor(
        @inject(TYPES.OutputHandler) public readonly outputHandler: IOutputHandler, 
        @inject(TYPES.InventoryManager) public readonly inventoryManager: IInventoryManager, 
        @inject(TYPES.Player) public readonly player: IPlayer,
        @inject(TYPES.RoomManager) public readonly roomManager: IRoomManager
    ) { }

    /**
     * @param command the command that needs to be executed
     */
    public executeCommand(command: ICommand): void {
        switch(command.command) {
            case CommandType.ping: {
                this.outputHandler.println("Pong!")
                break
            }

            case CommandType.inventory: {
                this.outputHandler.println(`Inventory (${this.inventoryManager.getAmountOfItems()}/${this.inventoryManager.getMaxItems()}): ${this.inventoryManager.toString()}`)
                break
            }

            case CommandType.location: {
                this.outputHandler.println(`Player location: ${this.player.location? this.player.location.roomName : "Unknown"}`)
                break
            }

            case CommandType.help: {
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
                this.outputHandler.println("info <item> - Study an item in your inventory")
                this.outputHandler.println("drop <item> - Drop item from your inventory")
                this.outputHandler.println("---------------------------------------------")
                break
            }

            case CommandType.doors: {
                if(!this.player.location) {
                    return this.outputHandler.println("Unknown location")
                }
                this.outputHandler.println(`There are ${this.player.location.getAmountOfAdjacentRooms()} doors that lead to: ${this.player.location.getAdjacentRoomNames()}`)
                break
            }

            case CommandType.observe: {
                if(this.player.location) {
                    this.outputHandler.println(`You observe the following items: ${this.player.location.getItemNames()} and ${this.player.location.getAmountOfAdjacentRooms()} door(s)`)
                } else {
                    this.outputHandler.setNextLineTextColor(COLORS.YELLOW)
                    this.outputHandler.println("Unknown location")
                    this.outputHandler.setNextLineTextColor(COLORS.LIGHTGREEN)
                }
                break
            }

            case CommandType.moveto: {
                const room = this.roomManager.getRoom(command.arguments)
                if(!room) {
                    return this.outputHandler.println("Unknown location")
                }
                if(!this.roomManager.moveToRoom(room)) {
                    return this.outputHandler.println("Unable to move to this room")
                }
                break
            }

            case CommandType.clear: {
                this.outputHandler.clear()
                break
            }

            case CommandType.pickup: {
                if(!this.player.location) {
                    return this.outputHandler.println("Unknown location")
                }
                
                const object: IItem | null = this.player.location.getItemByName(command.arguments)
                if(object) {
                    return object.pickup()
                }
                return this.outputHandler.println("Object not found")
            }
            case CommandType.use: {
                if(!this.player.location) {
                    return this.outputHandler.println("Unknown location")
                }
                const object: IItem | null = this.player.location.getItemByName(command.arguments)
                if(object) {
                    return object.use()
                }
                return this.outputHandler.println("Object not found")
            }

            case CommandType.info: {
                const object: IItem | null = this.inventoryManager.getItems().filter((item: IItem) => item.itemName === command.arguments)[0] || null
                if(object) {
                    return object.use()
                }
                return this.outputHandler.println("Object not found")
            }

            case CommandType.drop: {
                if(!this.player.location) {
                    return this.outputHandler.println("Unknown location")
                }
                
                const object: IItem | null = this.inventoryManager.getItems().filter((item: IItem) => item.itemName === command.arguments)[0] || null
                if(object) {
                    this.inventoryManager.removeItem(object)
                    this.player.location.addItem(object)
                    return
                }
                return this.outputHandler.println("Object not found")
            }

            default: {
                this.outputHandler.setNextLineTextColor(COLORS.YELLOW)
                this.outputHandler.println(`Unknown command, use the help command in order to see a list of commands`)
                this.outputHandler.setNextLineTextColor(COLORS.LIGHTGREEN)
            }
        }
    }
}