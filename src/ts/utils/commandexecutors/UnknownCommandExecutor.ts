import { ICommandExecutor } from "../../abstract/utils/ICommandExecutor";
import { inject, injectable } from "../../../../node_modules/inversify";
import { TYPES } from "../../constants/Types";
import { IOutputHandler } from "../../abstract/utils/IOutputHandler";
import { COLORS } from "../../constants/Colors";

@injectable()
export class UnknownCommandExecutor implements ICommandExecutor {
    constructor(
        @inject(TYPES.OutputHandler) private readonly outputHandler: IOutputHandler
    ) {}
    
    execute(): void {
        this.outputHandler.setNextLineTextColor(COLORS.YELLOW);
		this.outputHandler.println(`Unknown command, use the help command in order to see a list of commands`);
    }
}