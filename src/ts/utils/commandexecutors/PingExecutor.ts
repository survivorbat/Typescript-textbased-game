import { ICommandExecutor } from '../../abstract/utils/ICommandExecutor';
import { inject, injectable } from '../../../../node_modules/inversify';
import { TYPES } from '../../constants/DependencyTypes';
import { IOutputHandler } from '../../abstract/utils/IOutputHandler';
import { COLORS } from '../../constants/Colors';

@injectable()
export class PingExecutor implements ICommandExecutor {
	constructor(@inject(TYPES.OutputHandler) private readonly outputHandler: IOutputHandler) {}

	execute(): void {
		this.outputHandler.println('Pong!', COLORS.LIGHTGREEN);
	}
}
