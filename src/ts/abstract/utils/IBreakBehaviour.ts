import { IItem } from "../entities/IItem";

export interface IBreakBehaviour {
    break(item: IItem): void
}