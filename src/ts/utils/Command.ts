import { ICommand } from '../abstract/utils/ICommand';
import { ICommandExecutor } from '../abstract/utils/ICommandExecutor';

export class Command implements ICommand {
	private readonly useValue: string

	constructor(
		useValue: string, 
		private readonly useExecutor: ICommandExecutor,
		public readonly commandAsText: string = ""
	) { 
		this.useValue = useValue.trim().toLowerCase()
	}

	public execute() {
		this.useExecutor.execute(this.useValue)
	}
}
