import { IItem } from "../entities/IItem";

export interface IUseBehaviour {
    use(item: IItem): void
}