import { IRoom } from "../abstract/entities/IRoom";
import { IItem } from "../abstract/entities/IItem";
import { IOutputHandler } from "../abstract/utils/IOutputHandler";

export class Room implements IRoom {
    // Text once you enter the room
    startText?: string

    // Locked
    locked: boolean = false

    // List of items
    items: Array<IItem> = new Array<IItem>()

    /**
     * @param roomCode Roomcode
     * @param roomName Name of the room
     */
    constructor(
        public readonly roomCode: string, 
        public readonly roomName: string,
        public adjacentRooms: Array<IRoom> = new Array<IRoom>()
    ) { }

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
        this.items = this.items.filter((roomItem: IItem) => roomItem.itemName !== item.itemName)
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
        result = this.items.reduce((previous, current) => `${previous} ${current.itemName},`,"")
        return result.trim().substring(0, result.length-2)
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
        return this.adjacentRooms.reduce((previous, current) => `${previous} ${current.roomName}`,"")
    }

    /** 
     * @returns number of adjacent rooms
     */
    getAmountOfAdjacentRooms(): number {
        return this.adjacentRooms.length
    }

    /**
     * @param room to add
     */
    addAdjacentRoom(room: IRoom): void {
        this.adjacentRooms.push(room)
    }

    /**
     * @param room to remove
     */
    removeAdjacentRoom(room: IRoom): void {
        this.adjacentRooms = this.adjacentRooms.filter((selectedRoom: IRoom) => selectedRoom.roomCode !== room.roomCode)
    }
}