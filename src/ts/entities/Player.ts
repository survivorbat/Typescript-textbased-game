import { IPlayer } from '../abstract/entities/IPlayer';
import { injectable, inject } from '../../../node_modules/inversify';
import { IRoom } from '../abstract/entities/IRoom';
import { TYPES } from '../constants/DependencyTypes';
import { IInventoryManager } from '../abstract/utils/IInventoryManager';
import { IItem } from '../abstract/entities/IItem';

@injectable()
export class Player implements IPlayer {
	// Current room
	private _location?: IRoom;
	public roomsVisited: Array<IRoom> = new Array<IRoom>();

	constructor(@inject(TYPES.InventoryManager) public readonly inventoryManager: IInventoryManager) {}

	public pickupItem(item: IItem): boolean {
		return this.inventoryManager.addItem(item);
	}

	get location(): IRoom | undefined {
		return this._location;
	}

	set location(location: IRoom | undefined) {
		location && !this.roomsVisited.includes(location) ? this.roomsVisited.push(location) : null;
		this._location = location;
	}
}
