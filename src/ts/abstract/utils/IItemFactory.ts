import { IItem } from '../entities/IItem';

export interface IItemFactory {
	getRandomItem(pickupable?: boolean | null): IItem;
	getRandomItems(amount: number, pickupable?: boolean | null): Array<IItem>;
	getItem(itemName: string): IItem;
}
