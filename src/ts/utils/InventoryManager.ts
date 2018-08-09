import { IInventoryManager } from '../abstract/utils/IInventoryManager';
import { IInventory } from '../abstract/entities/IInventory';
import { inject } from 'inversify';
import { TYPES } from '../constants/DependencyTypes';
import { injectable } from '../../../node_modules/inversify';
import { IItem } from '../abstract/entities/IItem';
import { IOutputHandler } from '../abstract/utils/IOutputHandler';
import { ExpansionKit } from '../entities/specialitems/ExpansionKit';
import { COLORS } from '../constants/Colors';

@injectable()
export class InventoryManager implements IInventoryManager {
	/**
     * @param inventory inventory object
     */
	constructor(
		@inject(TYPES.Inventory) private readonly inventory: IInventory,
		@inject(TYPES.OutputHandler) private readonly outputHandler: IOutputHandler
	) {}

	/**
     * @param amount
     */
	setMaxItems(amount: number): void {
		this.inventory.maxItems = amount;
	}

	/**
     * @returns max number of items in inventory
     */
	getMaxItems(): number {
		return this.inventory.maxItems;
	}

	/**
     * @returns amount of items
     */
	getAmountOfItems(): number {
		return this.inventory.items.length;
	}

	/**
     * @returns Items in inventpry
     */
	getItems(): Array<IItem> {
		return this.inventory.items;
	}

	/**
     * @param item that needs to be added
     * @returns boolean if it worked
     */
	addItem(item: IItem): boolean {
		return this.inventory.addItem(item);
	}

	/**
     * @param item that needs to be removed
     * @returns boolean if it worked
     */
	removeItem(item: IItem): boolean {
		return this.inventory.removeItem(item);
	}

	/**
     * @param itemName name of the item
     * @returns boolean that tells whether item is in inventory
     */
	isInInventory(itemName: string): boolean {
		return this.inventory.items.map((item: IItem) => item.itemName).includes(itemName);
	}

	toString(): string {
		return this.inventory.toString();
	}

	/**
     * Consume expansion pack
     * @param item to be consumed
     */
	consumeExpansionPack(expansionKit: ExpansionKit) {
		this.outputHandler.println(
			`You equipped a backpack, you now have ${expansionKit.size} more inventory slots`,
			COLORS.LIGHTGREEN
		);
		this.setMaxItems(this.getMaxItems() + expansionKit.size);
		this.removeItem(expansionKit);
	}
}
