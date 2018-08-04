import { IRoom } from "./IRoom";
import { IItem } from "./IItem";

export interface IPlayer {
    location?: IRoom
    pickupItem(item: IItem): boolean
}