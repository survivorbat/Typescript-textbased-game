import { ICommand } from './ICommand';

export interface ICommandHandler {
	executeCommand(command: ICommand): void;
}
