import { ICommandExecutor } from '../../abstract/utils/ICommandExecutor';
import { inject, injectable } from '../../../../node_modules/inversify';
import { TYPES } from '../../constants/DependencyTypes';
import { IOutputHandler } from '../../abstract/utils/IOutputHandler';
import { COLORS } from '../../constants/Colors';
import { IPlayer } from '../../abstract/entities/IPlayer';
import { getRandomCanNotPickupMessage } from '../../constants/Messages';
import { IItem } from '../../abstract/entities/IItem';

@injectable()
export class PickupExecutor implements ICommandExecutor {
	constructor(
		@inject(TYPES.OutputHandler) private readonly outputHandler: IOutputHandler,
		@inject(TYPES.Player) private readonly player: IPlayer
	) {}

	execute(argument: string): void {
		if (!this.player.location) {
			return this.outputHandler.println('Unknown player location', COLORS.YELLOW);
		}
		const object: IItem | null = this.player.location.getItemByName(argument);
		if (object) {
			if (!object.pickupable) {
				return this.outputHandler.println(getRandomCanNotPickupMessage());
			}
			if (this.player.pickupItem(object)) {
				this.player.location.removeItem(object);
				return this.outputHandler.println(`Picked up ${object.itemName}`, COLORS.LIGHTGREEN);
			}
			return this.outputHandler.println('Unable to pick up object', COLORS.YELLOW);
		}
		return this.outputHandler.println('Object not found', COLORS.YELLOW);
	}
}
