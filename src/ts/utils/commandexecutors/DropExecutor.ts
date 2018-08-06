import { ICommandExecutor } from "../../abstract/utils/ICommandExecutor";
import { inject, injectable } from "../../../../node_modules/inversify";
import { TYPES } from "../../constants/Types";
import { IOutputHandler } from "../../abstract/utils/IOutputHandler";
import { COLORS } from "../../constants/Colors";
import { IPlayer } from "../../abstract/entities/IPlayer";
import { getRandomCanNotPickupMessage } from "../../constants/Messages";
import { IItem } from "../../abstract/entities/IItem";

@injectable()
export class DropExecutor implements ICommandExecutor {
    constructor(
        @inject(TYPES.OutputHandler) private readonly outputHandler: IOutputHandler,
        @inject(TYPES.Player) private readonly player: IPlayer
    ) {}
    
    execute(argument: string): void {
        if (!this.player.location) {
            return this.outputHandler.println('Unknown location');
        }
    
        const object: IItem | null =
            this.player.inventoryManager
                .getItems()
                .filter((item: IItem) => item.itemName === argument)[0] || null;
        if (object) {
            this.player.inventoryManager.removeItem(object);
            this.player.location.addItem(object);
            return;
        }
        return this.outputHandler.println('Object not found');
    }
}