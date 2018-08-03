import { IRoom } from "../entities/IRoom";

export interface IRoomManager {
    moveToRoom(room: IRoom): boolean
    getRoom(name: string): IRoom | null
}