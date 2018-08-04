import { IRoom } from "../abstract/entities/IRoom";
import { IItem } from "../abstract/entities/IItem";
import { IOutputHandler } from "../abstract/utils/IOutputHandler";

export class Room implements IRoom {

    // Roomcode
    roomCode: string

    // Roomname
    roomName: string

    // Text once you enter the room
    startText?: string

    // Room to the left
    roomLeft?: IRoom

    // Room to the right
    roomRight?: IRoom

    // Room upwards
    roomUp?: IRoom

    // Room down
    roomDown?: IRoom

    // Locked
    locked: boolean = false

    // List of items
    items: Array<IItem> = new Array<IItem>()

    /**
     * @param roomCode Roomcode
     * @param roomName Name of the room
     */
    constructor(roomCode: string, roomName: string) {
        this.roomCode = roomCode
        this.roomName = roomName
    }

    /**
     * Add an item
     * @param item Item to add
     */
    addItem(item: IItem): void {
        this.items.push(item)
    }

    /**
     * Remove an item
     * @param item to be removed
     */
    removeItem(item: IItem): void {
        this.items = this.items.filter((roomItem: IItem) => roomItem.itemCode !== item.itemCode)
    }

    /**
     * Get item by name or return null
     * @param itemName to be searched for
     * @returns item or null
     */
    getItemByName(itemName: string): IItem | null {
        return this.items.filter((item: IItem) => item.itemName.toLowerCase() === itemName.toLowerCase())[0]
    }

    /**
     * @returns list of items
     */
    getItemNames(): string {
        let result = ""
        this.items.forEach((item: IItem, key: number) => {
            result += item.itemName
            if(this.items[key+1]) {
                result += ", "
            }
        })
        return result.trim()
    }

    /**
     * Initialize room
     */
    init(outputHandler: IOutputHandler): void {
        outputHandler.println(`${this.startText}`)
    }

    /**
     * @returns a string containing the room names
     */
    getAdjacentRoomNames(): string {
        let result = ""
        if(this.roomDown) {
            result += this.roomDown.roomName + " "
        }
        if(this.roomUp) {
            result += this.roomUp.roomName + " "
        }
        if(this.roomRight) {
            result += this.roomRight.roomName + " "
        }
        if(this.roomLeft) {
            result += this.roomLeft.roomName + " "
        }
        return result.trim()
    }

    /** 
     * @returns number of adjacent rooms
     */
    getAmountOfAdjacentRooms(): number {
        let number = 0
        if(this.roomDown) {
            number++
        }
        if(this.roomUp) {
            number++
        }
        if(this.roomRight) {
            number++
        }
        if(this.roomLeft) {
            number++
        }
        return number
    }
}