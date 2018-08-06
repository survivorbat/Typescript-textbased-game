import { IRoom } from '../abstract/entities/IRoom';
import { IItem } from '../abstract/entities/IItem';
import { IOutputHandler } from '../abstract/utils/IOutputHandler';

export class Room implements IRoom {
	locked: boolean = false;
	items: Array<IItem> = new Array<IItem>();

	constructor(
		public readonly roomCode: string,
		public readonly roomName: string,
		public readonly startText: string,
		public adjacentRooms: Array<IRoom> = new Array<IRoom>()
	) {}

	addItem(item: IItem | Array<IItem>): IRoom {
		if(!Array.isArray(item)) {
			this.items.push(item);
		} else {
			item.forEach((item: IItem) => this.addItem(item));
		}
		return this;
	}

	removeItem(item: IItem): IRoom {
		this.items = this.items.filter((roomItem: IItem) => roomItem.itemName !== item.itemName);
		return this;
	}

	getItemByName(itemName: string): IItem | null {
		return this.items.filter((item: IItem) => item.itemName.toLowerCase() === itemName.toLowerCase())[0];
	}

	getItemNames(): string {
		let result = '';
		result = this.items.reduce((previous, current) => `${previous} ${current.itemName},`, '');
		return result.trim().substring(0, result.length - 2);
	}

	init(outputHandler: IOutputHandler): void {
		outputHandler.println(`${this.startText}`);
	}

	getAdjacentRoomNames(): string {
		let result = '';
		result = this.adjacentRooms.reduce((previous, current) => `${previous} ${current.roomName},`, '');
		return result.trim().substring(0, result.length - 2);
	}

	getAmountOfAdjacentRooms(): number {
		return this.adjacentRooms.length;
	}

	addAdjacentRoom(room: IRoom): IRoom {
		this.adjacentRooms.push(room);
		return this;
	}

	addPathway(room: IRoom | Array<IRoom>): IRoom {
		if(!Array.isArray(room)) {
			this.addAdjacentRoom(room);
			room.addAdjacentRoom(this);
		} else {
			room.forEach((room: IRoom) => this.addPathway(room))
		}
		return this;
	}

	removeAdjacentRoom(room: IRoom): IRoom {
		this.adjacentRooms = this.adjacentRooms.filter(
			(selectedRoom: IRoom) => selectedRoom.roomCode !== room.roomCode
		);
		return this;
	}
}
