import { IItem } from "./IItem";
import { inherits } from "util";
import { IOutputHandler } from "../utils/IOutputHandler";

export interface IRoom {
    roomCode: string
    roomName: string
    startText?: string

    roomLeft?: IRoom
    roomRight?: IRoom
    roomUp?: IRoom
    roomDown?: IRoom

    locked: boolean

    items: Array<IItem>

    toString(): string
    addItem(item: IItem): void
    removeItem(item: IItem): void
    getItemByName(itemName: string): IItem | null
    getItemNames(): string
    getAdjacentRoomNames(): string
    getAmountOfAdjacentRooms(): number
    init(outputHandler: IOutputHandler): void
}