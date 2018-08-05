import { IItem } from '../entities/IItem';

export interface IItemFactory {
	getRandomItem(pickupable: boolean): IItem;
	getItem(itemName: string): IItem;
}
