import { IUseBehaviour } from "../../abstract/utils/IUseBehaviour"
import { inject, injectable } from "../../../../node_modules/inversify"
import { TYPES } from "../../constants/Types"
import { IOutputHandler } from "../../abstract/utils/IOutputHandler"
import { IItem } from "../../abstract/entities/IItem";
import { IPlayer } from "../../abstract/entities/IPlayer";

@injectable()
export class ExpandInventoryUseBehaviour implements IUseBehaviour {

    constructor(
        @inject(TYPES.OutputHandler) private readonly outputHandler: IOutputHandler,
        @inject(TYPES.Player) private readonly player: IPlayer
    ) {}

    use(item: IItem): void {
        this.outputHandler.println("You equipped a backpack, you now have 3 more inventory slots")
        this.player.inventoryManager.setMaxItems(this.player.inventoryManager.getMaxItems() + 3)
        this.player.inventoryManager.removeItem(item)
    }
}