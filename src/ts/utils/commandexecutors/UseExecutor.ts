import { ICommandExecutor } from '../../abstract/utils/ICommandExecutor';
import { inject, injectable } from '../../../../node_modules/inversify';
import { TYPES } from '../../constants/DependencyTypes';
import { IOutputHandler } from '../../abstract/utils/IOutputHandler';
import { COLORS } from '../../constants/Colors';
import { IPlayer } from '../../abstract/entities/IPlayer';
import { IItem } from '../../abstract/entities/IItem';
import { ExpansionKit } from '../../entities/specialitems/ExpansionKit';

@injectable()
export class UseExecutor implements ICommandExecutor {
	constructor(
		@inject(TYPES.OutputHandler) private readonly outputHandler: IOutputHandler,
		@inject(TYPES.Player) private readonly player: IPlayer
	) {}

	execute(argument: string): void {
		if (!this.player.location) {
			return this.outputHandler.println('Unknown player location', COLORS.YELLOW);
		}

		const object: IItem | null =
			this.player.location.getItemByName(argument) ||
			this.player.inventoryManager
				.getItems()
				.filter((item: IItem) => item.itemName.trim().toLowerCase() === argument)[0];
		if (object instanceof ExpansionKit) {
			return this.player.inventoryManager.consumeExpansionPack(object);
		}

		if (object) {
			return object.use();
		}
		return this.outputHandler.println('Object not found', COLORS.YELLOW);
	}
}
