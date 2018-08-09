import { IUseBehaviour } from '../../abstract/utils/IUseBehaviour';
import { IOutputHandler } from '../../abstract/utils/IOutputHandler';
import { injectable, inject } from '../../../../node_modules/inversify';
import { TYPES } from '../../constants/DependencyTypes';
import { COLORS } from '../../constants/Colors';

@injectable()
export class BedUseBehaviour implements IUseBehaviour {
	constructor(@inject(TYPES.OutputHandler) private readonly outputHandler: IOutputHandler) {}

	use(): void {
		this.outputHandler.println(
			'This bed looks a bit dirty and has mold spots, besides I just woke up',
			COLORS.LIGHTGREEN
		);
	}
}
