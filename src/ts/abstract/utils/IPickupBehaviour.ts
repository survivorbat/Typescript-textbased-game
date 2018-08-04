import { IItem } from "../entities/IItem";

export interface IPickupBehaviour {
    pickup(item: IItem): void
}