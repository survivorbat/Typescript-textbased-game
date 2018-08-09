import { IUseBehaviour } from '../../abstract/utils/IUseBehaviour';
import { inject, injectable } from '../../../../node_modules/inversify';
import { TYPES } from '../../constants/DependencyTypes';
import { IOutputHandler } from '../../abstract/utils/IOutputHandler';
import { getRandomCanNotUseMessage } from '../../constants/Messages';
import { COLORS } from '../../constants/Colors';

@injectable()
export class NoUseBehaviour implements IUseBehaviour {
	constructor(@inject(TYPES.OutputHandler) private outputHandler: IOutputHandler) {}

	use(): void {
		this.outputHandler.println(getRandomCanNotUseMessage(), COLORS.YELLOW);
	}
}
