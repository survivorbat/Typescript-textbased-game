import { IBreakBehaviour } from '../../abstract/utils/IBreakBehaviour';
import { inject, injectable } from '../../../../node_modules/inversify';
import { TYPES } from '../../constants/Types';
import { IOutputHandler } from '../../abstract/utils/IOutputHandler';
import { getRandomCanNotBreakMessage } from '../../constants/Messages';
@injectable()
export class NoBreakBehaviour implements IBreakBehaviour {
	constructor(@inject(TYPES.OutputHandler) private readonly outputHandler: IOutputHandler) {}

	break(): void {
		this.outputHandler.println(getRandomCanNotBreakMessage());
	}
}
