import { ICommandExecutor } from "../../abstract/utils/ICommandExecutor";
import { inject, injectable } from "../../../../node_modules/inversify";
import { TYPES } from "../../constants/Types";
import { IOutputHandler } from "../../abstract/utils/IOutputHandler";
import { COLORS } from "../../constants/Colors";
import { IPlayer } from "../../abstract/entities/IPlayer";

@injectable()
export class LocationExecutor implements ICommandExecutor {
    constructor(
        @inject(TYPES.OutputHandler) private readonly outputHandler: IOutputHandler,
        @inject(TYPES.Player) private readonly player: IPlayer
    ) {}
    
    execute(): void {
        if (!this.player.location) {
            this.outputHandler.setNextLineTextColor(COLORS.YELLOW);
            return this.outputHandler.println('Unknown player location');
        }
        this.outputHandler.println(`You observe the following items:`);
        this.outputHandler.setNextLineTextColor(COLORS.BLUE);
        this.outputHandler.println(`${this.player.location.getItemNames()}`);
        this.outputHandler.setNextLineTextColor(COLORS.LIGHTGREEN);
        this.outputHandler.println(
            `There are ${this.player.location.getAmountOfAdjacentRooms()} doors that lead to:`
        );
        this.outputHandler.setNextLineTextColor(COLORS.BLUE);
        this.outputHandler.println(`${this.player.location.getAdjacentRoomNames()}`);
    }
}