import { IUseBehaviour } from "../../abstract/utils/IUseBehaviour"
import { inject, injectable } from "../../../../node_modules/inversify"
import { TYPES } from "../../constants/Types"
import { IOutputHandler } from "../../abstract/utils/IOutputHandler"
import { getRandomCanNotUseMessage } from "../../constants/Messages";
import { IItem } from "../../abstract/entities/IItem";
import { IInventoryManager } from "../../abstract/utils/IInventoryManager";

@injectable()
export class ExpandInventoryUseBehaviour implements IUseBehaviour {

    constructor(
        @inject(TYPES.OutputHandler) private readonly outputHandler: IOutputHandler,
        @inject(TYPES.InventoryManager) private readonly inventoryManager: IInventoryManager
    ) {}

    use(item: IItem): void {
        this.outputHandler.println("You equipped a backpack, you now have 3 more inventory slots")
        this.inventoryManager.setMaxItems(this.inventoryManager.getMaxItems() + 3)
        this.inventoryManager.removeItem(item)
    }
}