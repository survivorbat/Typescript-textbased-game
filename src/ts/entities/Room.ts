import { IRoom } from "../abstract/entities/IRoom";
import { IItem } from "../abstract/entities/IItem";

export class Room implements IRoom {
    roomCode: string
    roomName: string
    startText?: string

    roomLeft?: IRoom
    roomRight?: IRoom
    roomUp?: IRoom
    roomDown?: IRoom

    items: Array<IItem> = new Array<IItem>()

    constructor(roomCode: string, roomName: string) {
        this.roomCode = roomCode
        this.roomName = roomName
    }

    addItem(item: IItem): void {
        this.items.push(item)
    }
    removeItem(item: IItem): void {
        this.items = this.items.filter((item: IItem) => item.itemCode !== item.itemCode)
    }

    getItemByName(itemName: string): IItem | null {
        return this.items.filter((item: IItem) => item.itemName.toLowerCase() === itemName.toLowerCase())[0]
    }

    getItemNames(): string {
        let result = ""
        this.items.forEach((item: IItem, key: number) => {
            result += item.itemName
            if(this.items[key+1]) {
                result += ", "
            }
        })
        return result
    }
}