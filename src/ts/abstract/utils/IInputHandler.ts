export interface IInputHandler {
	commandHistoryPosition: number;

	addCommand(input: string): void;
	clearBuffer(): void;
	execute(): void;
	getCommand(position: number): string;
}
