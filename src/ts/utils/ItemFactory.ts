import { IItemFactory } from '../abstract/utils/IItemFactory';
import { IItem } from '../abstract/entities/IItem';
import { NoUseBehaviour } from '../entities/ItemBehaviour/NoUseBehaviour';
import { IUseBehaviour } from '../abstract/utils/IUseBehaviour';
import { inject, injectable } from '../../../node_modules/inversify';
import { NoBreakBehaviour } from '../entities/ItemBehaviour/NoBreakBehaviour';
import { IBreakBehaviour } from '../abstract/utils/IBreakBehaviour';
import { BedUseBehaviour } from '../entities/ItemBehaviour/BedUseBehaviour';
import { Item } from '../entities/Item';
import { ToiletUseBehaviour } from '../entities/ItemBehaviour/ToiletUseBehaviour';
import { DefaultBreakBehaviour } from '../entities/ItemBehaviour/DefaultBreakBehaviour';

@injectable()
export class ItemFactory implements IItemFactory {
	private readonly items: Array<IItem> = new Array<IItem>();
	private readonly randomItems: Array<IItem> = new Array<IItem>();

	constructor(
		@inject(NoUseBehaviour) readonly noUseBehaviour: IUseBehaviour,
		@inject(NoBreakBehaviour) readonly noBreakBehaviour: IBreakBehaviour,
		@inject(BedUseBehaviour) readonly bedUseBehaviour: IUseBehaviour,
		@inject(ToiletUseBehaviour) readonly toiletUseBehaviour: IUseBehaviour,
		@inject(DefaultBreakBehaviour) readonly defaultBreakBehaviour: IBreakBehaviour
	) {
		this.items = [
			new Item('Bed', bedUseBehaviour, noBreakBehaviour),
			new Item('Toilet', toiletUseBehaviour, noBreakBehaviour),
			new Item('Shower curtain', noUseBehaviour, noBreakBehaviour),
			new Item('Shower head', noUseBehaviour, noBreakBehaviour),
			new Item('Wooden desk', noUseBehaviour, noBreakBehaviour),
			new Item('Empty book shelf', noUseBehaviour, noBreakBehaviour),
		];
		this.randomItems = [
			new Item('Dead Plant', noUseBehaviour, noBreakBehaviour),
			new Item('Small table', noUseBehaviour, noBreakBehaviour),
			new Item('Broken lamp', noUseBehaviour, noBreakBehaviour),
			new Item('A large pile of dust', noUseBehaviour, noBreakBehaviour),
			new Item(
				'A cardboard box',
				noUseBehaviour,
				defaultBreakBehaviour,
				true,
				'A cardboard box that was once used as a handy way to carry items, now it looks like it hasnt been used in years and is about to fall apart'
			),
			new Item('Small file cabinet', noUseBehaviour, noBreakBehaviour),
			new Item('Radiator on the wall', noUseBehaviour, noBreakBehaviour),
			new Item('Remains of a painting', noUseBehaviour, noBreakBehaviour, true, 'Some wooden parts'),
			new Item('An empty canvas on the wall', noUseBehaviour, noBreakBehaviour),
			new Item('Sketch painting on the wall', noUseBehaviour, defaultBreakBehaviour),
			new Item(
				'Piece of paper with yellow stains',
				noUseBehaviour,
				defaultBreakBehaviour,
				true,
				'A blank piece of paper that seems unusable, it has a lot of yellow stains on it'
			),
			new Item(
				'Book with mold spots',
				noUseBehaviour,
				defaultBreakBehaviour,
				true,
				"I can't decipher what this book was once used for, it is too molded"
			)
		];
	}

	public getRandomItem(pickupable: boolean | null = null): IItem {
		return this.getRandomItemFromArray(
			this.randomItems.filter((item: IItem) => pickupable === null || item.pickupable === pickupable)
		);
	}

	public getRandomItems(amount: number, pickupable: boolean | null = null): Array<IItem> {
		return new Array(amount).fill(null).map(() => this.getRandomItem(pickupable));
	}

	public getItem(itemName: string): IItem {
		const item = this.items.filter(
			(item: IItem) => item.itemName.toLowerCase().trim() === itemName.toLowerCase().trim()
		)[0];

		if (item) {
			return item;
		}
		throw new Error(`Item ${itemName} could not be found`);
	}

	private getRandomItemFromArray(array: Array<IItem>): IItem {
		return array[Math.floor(Math.random() * array.length)];
	}
}
