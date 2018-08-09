import { ICommandExecutor } from '../../abstract/utils/ICommandExecutor';
import { inject, injectable } from '../../../../node_modules/inversify';
import { TYPES } from '../../constants/DependencyTypes';
import { IOutputHandler } from '../../abstract/utils/IOutputHandler';
import { COLORS } from '../../constants/Colors';
import { IPlayer } from '../../abstract/entities/IPlayer';

@injectable()
export class InventoryExecutor implements ICommandExecutor {
	constructor(
		@inject(TYPES.OutputHandler) private readonly outputHandler: IOutputHandler,
		@inject(TYPES.Player) private readonly player: IPlayer
	) {}

	execute(): void {
		this.outputHandler.println(
			`Inventory (${this.player.inventoryManager.getAmountOfItems()}/${this.player.inventoryManager.getMaxItems()}):`,
			COLORS.LIGHTGREEN
		);
		this.outputHandler.println(`${this.player.inventoryManager.toString()}`, COLORS.BLUE);
	}
}
