import { IItem } from '../entities/IItem';

export interface IItemFactory {
	getRandomItem(pickupable?: boolean | null): IItem;
	getItem(itemName: string): IItem;
}
