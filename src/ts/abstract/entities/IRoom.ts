import { IItem } from './IItem';
import { IOutputHandler } from '../utils/IOutputHandler';

export interface IRoom {
	roomCode: string;
	roomName: string;
	startText?: string;

	adjacentRooms: Array<IRoom>;

	locked: boolean;

	items: Array<IItem>;

	toString(): string;
	addItem(item: IItem): IRoom;
	addItems(items: Array<IItem>): IRoom;

	removeItem(item: IItem): IRoom;
	getItemByName(itemName: string): IItem | null;
	getItemNames(): string;
	getAdjacentRoomNames(): string;
	getAmountOfAdjacentRooms(): number;
	addAdjacentRoom(room: IRoom): IRoom;

	addPathway(room: IRoom): IRoom;
	addPathways(rooms: Array<IRoom>): IRoom;

	removeAdjacentRoom(room: IRoom): IRoom;
	init(outputHandler: IOutputHandler): void;
}
