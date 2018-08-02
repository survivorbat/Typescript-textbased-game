import { ICommandHandler } from "../abstract/utils/ICommandHandler";
import { ICommand } from "../abstract/utils/ICommand";
import { IOutputHandler } from "../abstract/utils/IOutputHandler";
import { injectable, inject } from "../../../node_modules/inversify";
import { TYPES } from "../constants/types";
import { COLORS } from "../constants/Colors";

@injectable()
export class CommandHandler implements ICommandHandler {
    private outputHandler: IOutputHandler

    constructor(@inject(TYPES.OutputHandler) outputHandler: IOutputHandler) {
        this.outputHandler = outputHandler
    }

    public executeCommand(command: ICommand): void {
        switch(command.command.toLowerCase()) {
            case "ping":
                this.outputHandler.println(200, "Pong!")
                break
            default:
                this.outputHandler.setNextLineTextColor(COLORS.YELLOW)
                this.outputHandler.println(400, "WARNING: Unknown command")
                this.outputHandler.setNextLineTextColor(COLORS.LIGHTGREEN)
        }
    }
}