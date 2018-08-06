import { ICommandExecutor } from '../../abstract/utils/ICommandExecutor';
import { inject, injectable } from '../../../../node_modules/inversify';
import { TYPES } from '../../constants/Types';
import { IOutputHandler } from '../../abstract/utils/IOutputHandler';

@injectable()
export class ClearExecutor implements ICommandExecutor {
	constructor(@inject(TYPES.OutputHandler) private readonly outputHandler: IOutputHandler) {}

	execute(): void {
		this.outputHandler.clear();
	}
}
