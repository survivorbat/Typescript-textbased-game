import { ICommandExecutor } from '../../abstract/utils/ICommandExecutor';
import { inject, injectable } from '../../../../node_modules/inversify';
import { TYPES } from '../../constants/DependencyTypes';
import { IOutputHandler } from '../../abstract/utils/IOutputHandler';
import { COLORS } from '../../constants/Colors';
import { IPlayer } from '../../abstract/entities/IPlayer';

@injectable()
export class LocationExecutor implements ICommandExecutor {
	constructor(
		@inject(TYPES.OutputHandler) private readonly outputHandler: IOutputHandler,
		@inject(TYPES.Player) private readonly player: IPlayer
	) {}

	execute(): void {
		if (!this.player.location) {
			return this.outputHandler.println('Unknown player location', COLORS.YELLOW);
		}
		this.outputHandler.println(`Player location:`, COLORS.LIGHTGREEN);
		this.outputHandler.println(`${this.player.location.roomName}`, COLORS.LIGHTGREEN);
	}
}
