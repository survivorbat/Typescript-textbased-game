import { IBreakBehaviour } from '../../abstract/utils/IBreakBehaviour';
import { inject, injectable } from '../../../../node_modules/inversify';
import { TYPES } from '../../constants/DependencyTypes';
import { IOutputHandler } from '../../abstract/utils/IOutputHandler';
import { IItem } from '../../abstract/entities/IItem';
import { IPlayer } from '../../abstract/entities/IPlayer';
import { COLORS } from '../../constants/Colors';
@injectable()
export class DefaultBreakBehaviour implements IBreakBehaviour {
	constructor(
		@inject(TYPES.OutputHandler) private readonly outputHandler: IOutputHandler,
		@inject(TYPES.Player) private readonly player: IPlayer
	) {}

	break(item: IItem): void {
		this.outputHandler.println(`You broke ${item.itemName}, that was pointless`, COLORS.LIGHTGREEN);
		this.player.inventoryManager.removeItem(item);
	}
}
