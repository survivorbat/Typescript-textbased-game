import { ICommand } from '../abstract/utils/ICommand';
import { ICommandExecutor } from '../abstract/utils/ICommandExecutor';

export class Command implements ICommand {
	constructor(
		private readonly useValue: string, 
		private readonly useExecutor: ICommandExecutor,
		public readonly commandAsText: string = ""
	) { }

	public execute() {
		this.useExecutor.execute(this.useValue)
	}
}
