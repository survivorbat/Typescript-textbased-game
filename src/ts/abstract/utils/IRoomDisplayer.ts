export interface IRoomDisplayer {
	width: number;
	height: number;
	sizeMultiplier: number;
	getRow(symbol: string): string;
	getRowWithItemName(objectName: string): string;
	getRowWithNameCentered(name: string): string;
}
