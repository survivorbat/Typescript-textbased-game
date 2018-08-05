import { IItem } from './IItem';
import { inherits } from 'util';
import { IOutputHandler } from '../utils/IOutputHandler';

export interface IRoom {
	roomCode: string;
	roomName: string;
	startText?: string;

	adjacentRooms: Array<IRoom>;

	locked: boolean;

	items: Array<IItem>;

	toString(): string;
	addItem(item: IItem): void;
	removeItem(item: IItem): void;
	getItemByName(itemName: string): IItem | null;
	getItemNames(): string;
	getAdjacentRoomNames(): string;
	getAmountOfAdjacentRooms(): number;
	addAdjacentRoom(room: IRoom): void;
	removeAdjacentRoom(room: IRoom): void;
	init(outputHandler: IOutputHandler): void;
}
