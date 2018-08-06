import { ICommandExecutor } from '../../abstract/utils/ICommandExecutor';
import { inject, injectable } from '../../../../node_modules/inversify';
import { TYPES } from '../../constants/Types';
import { IOutputHandler } from '../../abstract/utils/IOutputHandler';
import { COLORS } from '../../constants/Colors';
import { IPlayer } from '../../abstract/entities/IPlayer';
import { IItem } from '../../abstract/entities/IItem';

@injectable()
export class DropExecutor implements ICommandExecutor {
	constructor(
		@inject(TYPES.OutputHandler) private readonly outputHandler: IOutputHandler,
		@inject(TYPES.Player) private readonly player: IPlayer
	) {}

	execute(argument: string): void {
		if (!this.player.location) {
			return this.outputHandler.println('Unknown location');
		}

		const objects: Array<IItem> = this.player.inventoryManager
			.getItems()
			.filter((item: IItem) => item.itemName.toLowerCase().trim().includes(argument));
		if (objects.length > 1) {
			this.outputHandler.println('Please be a bit more specific, items that match your query: ');
			this.outputHandler.setNextLineTextColor(COLORS.BLUE);
			this.outputHandler.println(`${objects.toString()}`);
		}
		if (objects[0]) {
			this.player.inventoryManager.removeItem(objects[0]);
			this.player.location.addItem(objects[0]);
			this.outputHandler.println(`Dropped ${objects[0].itemName}`);
			return;
		}
		return this.outputHandler.println('Object not found');
	}
}
