import { ICommandExecutor } from "../../abstract/utils/ICommandExecutor";
import { inject, injectable } from "../../../../node_modules/inversify";
import { TYPES } from "../../constants/Types";
import { IOutputHandler } from "../../abstract/utils/IOutputHandler";
import { COLORS } from "../../constants/Colors";
import { CommandType } from "../../constants/CommandTypes";

@injectable()
export class HelpExecutor implements ICommandExecutor {
    constructor(
        @inject(TYPES.OutputHandler) private readonly outputHandler: IOutputHandler
    ) {}
    
    execute(): void {
        this.outputHandler.println('Available commands:');
        this.outputHandler.setNextLineTextColor(COLORS.BLUE);
        this.outputHandler.println('---------------------------------------------');
        Object.keys(CommandType).forEach((key: string) => {
            const command = (<any>CommandType)[key];
            this.outputHandler.println(`${command.name} / ${command.shortcut} - ${command.description}`);
        })
        this.outputHandler.println('---------------------------------------------');
    }
}