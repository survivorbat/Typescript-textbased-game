import { ICommandExecutor } from '../../abstract/utils/ICommandExecutor';
import { inject, injectable } from '../../../../node_modules/inversify';
import { TYPES } from '../../constants/Types';
import { IOutputHandler } from '../../abstract/utils/IOutputHandler';
import { COLORS } from '../../constants/Colors';
import { CommandTypes } from '../../constants/CommandTypes';
import { ICommandType } from '../../abstract/utils/ICommandType';

@injectable()
export class HelpExecutor implements ICommandExecutor {
	constructor(@inject(TYPES.OutputHandler) private readonly outputHandler: IOutputHandler) {}

	execute(): void {
		this.outputHandler.println('Available commands:');
		this.outputHandler.setNextLineTextColor(COLORS.BLUE);
		this.outputHandler.println('---------------------------------------------');
		CommandTypes.forEach((commandType: ICommandType) => {
			this.outputHandler.println(`${commandType.name} / ${commandType.shortcut} - ${commandType.description}`);
		});
		this.outputHandler.println('---------------------------------------------');
	}
}
