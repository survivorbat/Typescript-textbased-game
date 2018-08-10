export interface IRoomDisplayer {
	width: number;
	height: number;
	sizeMultiplier: number;
	getRow(symbol: string): string;
	getRowWithItemName(objectName: string, adjacentRoomName?: string | null): string;
	getRowWithNameCentered(name: string): string;
}
