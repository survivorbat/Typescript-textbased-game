import { ICommandExecutor } from '../../abstract/utils/ICommandExecutor';
import { inject, injectable } from '../../../../node_modules/inversify';
import { TYPES } from '../../constants/Types';
import { IOutputHandler } from '../../abstract/utils/IOutputHandler';
import { COLORS } from '../../constants/Colors';
import { IPlayer } from '../../abstract/entities/IPlayer';
import { IItem } from '../../abstract/entities/IItem';

@injectable()
export class InfoExecutor implements ICommandExecutor {
	constructor(
		@inject(TYPES.OutputHandler) private readonly outputHandler: IOutputHandler,
		@inject(TYPES.Player) private readonly player: IPlayer
	) {}

	execute(argument: string): void {
		if (!this.player.location) {
			this.outputHandler.setNextLineTextColor(COLORS.YELLOW);
			return this.outputHandler.println('Unknown player location');
		}

		const object: IItem | null =
			this.player.inventoryManager.getItems().filter((item: IItem) => item.itemName.trim().toLowerCase() === argument)[0] || null;
		if (object) {
			return this.outputHandler.println(object.info || "");
		}
		return this.outputHandler.println('Object not found');
	}
}
