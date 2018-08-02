import { IItem } from "./IItem";

export interface IRoom {
    roomCode: string
    roomName: string
    startText?: string

    roomLeft?: IRoom
    roomRight?: IRoom
    roomUp?: IRoom
    roomDown?: IRoom

    items: Array<IItem>

    toString(): string
    addItem(item: IItem): void
    removeItem(item: IItem): void
    getItemByName(itemName: string): IItem | null
    getItemNames(): string
}