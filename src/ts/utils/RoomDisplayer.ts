import { IRoomDisplayer } from '../abstract/utils/IRoomDisplayer';
import { injectable } from '../../../node_modules/inversify';

@injectable()
export class RoomDisplayer implements IRoomDisplayer {
	constructor(
		public readonly width: number,
		public readonly height: number,
		public readonly sizeMultiplier: number = 8
	) {}

	getRow(symbol: string): string {
		return new Array(this.width * this.sizeMultiplier).fill(symbol).join('');
	}

	getRowWithItemName(objectName: string, adjacentRoomName: string | null = null): string {
		// Get an empty row
		let row = new Array(this.width * this.sizeMultiplier - 2).fill(' ');
		// If object is not empty, replace a random part with the word
		if (objectName) {
			row[this.getPositivePosition(row, objectName)] = objectName;
		}

		let result: string = '|' + row.join('').substring(0, row.length) + '|';

		if (adjacentRoomName) {
			result += ` ==> ${adjacentRoomName}`;
		}
		// Return the row
		return result;
	}

	getRowWithNameCentered(name: string): string {
		return (
			this.getRow(' ').substring(0, this.width * this.sizeMultiplier / 2 - name.length / 2) +
			name.toLocaleUpperCase()
		);
	}

	private getPositivePosition(row: Array<string>, objectName: string): number {
		let position = -1;
		while (position <= 0) {
			position = 1 + Math.floor(Math.random() * row.length - objectName.length);
		}
		return position;
	}
}
