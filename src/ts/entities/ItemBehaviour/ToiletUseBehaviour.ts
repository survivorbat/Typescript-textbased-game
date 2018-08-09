import { IUseBehaviour } from '../../abstract/utils/IUseBehaviour';
import { IOutputHandler } from '../../abstract/utils/IOutputHandler';
import { injectable, inject } from '../../../../node_modules/inversify';
import { TYPES } from '../../constants/DependencyTypes';
import { COLORS } from '../../constants/Colors';

@injectable()
export class ToiletUseBehaviour implements IUseBehaviour {
	constructor(@inject(TYPES.OutputHandler) private readonly outputHandler: IOutputHandler) {}

	use(): void {
		this.outputHandler.println(
			"Ewl, I really don't need to right now, besides it looks disgusting",
			COLORS.LIGHTGREEN
		);
	}
}
