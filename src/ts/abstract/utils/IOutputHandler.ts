export interface IOutputHandler {
	setElement(element: HTMLElement): void;

	print(text: string): void;
	println(text: string, color?: string | null): void;
	printLineBreak(): void;

	setNextLineTextColor(color: string): void;
	setNextLineBackgroundColor(color: string): void;

	setNextLineFontSize(size: string): void;

	setContainerTextColor(color: string): void;
	setContainerBackgroundColor(color: string): void;

	clear(): void;
}
