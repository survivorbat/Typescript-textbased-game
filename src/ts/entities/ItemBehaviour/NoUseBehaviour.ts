import { IUseBehaviour } from '../../abstract/utils/IUseBehaviour';
import { inject, injectable } from '../../../../node_modules/inversify';
import { TYPES } from '../../constants/Types';
import { IOutputHandler } from '../../abstract/utils/IOutputHandler';
import { getRandomCanNotUseMessage } from '../../constants/Messages';

@injectable()
export class NoUseBehaviour implements IUseBehaviour {
	constructor(@inject(TYPES.OutputHandler) private outputHandler: IOutputHandler) {}

	use(): void {
		this.outputHandler.println(getRandomCanNotUseMessage());
	}
}
