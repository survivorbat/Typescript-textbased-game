import { Command } from "../Command";
import { COLORS } from "../../constants/Colors";

export class UnknownCommand extends Command {
    execute(): void {
        this.outputHandler.setNextLineTextColor(COLORS.YELLOW)
        this.outputHandler.println(400, `WARNING: Unknown command, use the help command in order to see a list of commands`)
        this.outputHandler.setNextLineTextColor(COLORS.LIGHTGREEN)
    }
}