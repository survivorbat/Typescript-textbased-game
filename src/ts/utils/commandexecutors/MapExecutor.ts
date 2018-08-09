import { ICommandExecutor } from '../../abstract/utils/ICommandExecutor';
import { inject, injectable } from '../../../../node_modules/inversify';
import { TYPES } from '../../constants/DependencyTypes';
import { IOutputHandler } from '../../abstract/utils/IOutputHandler';
import { COLORS } from '../../constants/Colors';
import { IMapGenerator } from '../../abstract/utils/IMapGenerator';
import { IPlayer } from '../../abstract/entities/IPlayer';

@injectable()
export class MapExecutor implements ICommandExecutor {
	constructor(
		@inject(TYPES.MapGenerator) private readonly mapGenerator: IMapGenerator,
		@inject(TYPES.Player) private readonly player: IPlayer,
		@inject(TYPES.OutputHandler) private readonly outputHandler: IOutputHandler
	) {}

	execute(): void {
		if (!this.player.location) {
			return this.outputHandler.println('Unknown player location', COLORS.YELLOW);
		}
		this.mapGenerator.generateMap(this.player.location);
	}
}
