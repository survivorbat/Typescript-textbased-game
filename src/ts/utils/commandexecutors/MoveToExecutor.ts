import { ICommandExecutor } from '../../abstract/utils/ICommandExecutor';
import { inject, injectable } from '../../../../node_modules/inversify';
import { TYPES } from '../../constants/DependencyTypes';
import { IOutputHandler } from '../../abstract/utils/IOutputHandler';
import { IRoomManager } from '../../abstract/utils/IRoomManager';
import { COLORS } from '../../constants/Colors';

@injectable()
export class MoveToExecutor implements ICommandExecutor {
	constructor(
		@inject(TYPES.OutputHandler) private readonly outputHandler: IOutputHandler,
		@inject(TYPES.RoomManager) private readonly roomManager: IRoomManager
	) {}

	execute(argument: string): void {
		const room = this.roomManager.getRoom(argument);
		if (!room) {
			return this.outputHandler.println('Unknown location', COLORS.YELLOW);
		}
		if (!this.roomManager.moveToRoom(room)) {
			return this.outputHandler.println('Unable to move to this room', COLORS.YELLOW);
		}
	}
}
