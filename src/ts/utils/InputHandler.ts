import { IInputHandler } from '../abstract/utils/IInputHandler';
import { ICommand } from '../abstract/utils/ICommand';
import { injectable, inject } from '../../../node_modules/inversify';
import { TYPES } from '../constants/types';
import { ICommandFactory } from '../abstract/utils/ICommandFactory';
import { IOutputHandler } from '../abstract/utils/IOutputHandler';
import { COLORS } from '../constants/Colors';

@injectable()
export class InputHandler implements IInputHandler {
	private inputBuffer: Array<ICommand> = new Array<ICommand>();

	private _shouldAutoClearBuffer: boolean = true;

	private commandHistory: Array<string> = new Array<string>();

	private _commandHistoryPosition: number = 0;

	constructor(
		@inject(TYPES.CommandFactory) private readonly commandFactory: ICommandFactory,
		@inject(TYPES.OutputHandler) private readonly outputHandler: IOutputHandler
	) {}

	get shouldAutoClearBuffer(): boolean {
		return this._shouldAutoClearBuffer;
	}

	set shouldAutoClearBuffer(shouldAutoClearBuffer: boolean) {
		this._shouldAutoClearBuffer = shouldAutoClearBuffer;
	}

	get commandHistoryPosition(): number {
		return this._commandHistoryPosition;
	}

	public addCommand(input: string): void {
		this.inputBuffer.push(this.commandFactory.getCommandFromString(input.trim().toLowerCase()));
		this.commandHistory.push(input);
		this._commandHistoryPosition = this.commandHistory.length;
	}

	public getCommand(position: number): string {
		if (position < 0 || position > this.commandHistory.length) {
			this._commandHistoryPosition = this.commandHistory.length;
			return '';
		}
		this._commandHistoryPosition = position;
		return this.commandHistory[this._commandHistoryPosition];
	}

	public clearBuffer(): void {
		this.inputBuffer = new Array<ICommand>();
	}

	public execute(): void {
		this.inputBuffer.forEach((command: ICommand) => {
			this.outputHandler.printLineBreak();
			this.outputHandler.setNextLineTextColor(COLORS.LIGHTRED);
			this.outputHandler.println(command.commandAsText);
			this.outputHandler.setNextLineTextColor(COLORS.LIGHTGREEN);
			command.execute();
		});
		if (this.shouldAutoClearBuffer) {
			this.clearBuffer();
		}
	}
}
