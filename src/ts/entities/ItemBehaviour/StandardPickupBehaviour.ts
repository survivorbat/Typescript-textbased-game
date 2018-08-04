import { IPickupBehaviour } from "../../abstract/utils/IPickupBehaviour";
import { inject, injectable } from "../../../../node_modules/inversify";
import { TYPES } from "../../constants/Types";
import { IInventoryManager } from "../../abstract/utils/IInventoryManager";
import { IOutputHandler } from "../../abstract/utils/IOutputHandler";
import { IItem } from "../../abstract/entities/IItem";

@injectable()
export class StandardPickupBehaviour implements IPickupBehaviour {

    constructor(
        @inject(TYPES.InventoryManager) private readonly inventoryManager: IInventoryManager,
        @inject(TYPES.OutputHandler) private readonly outputHandler: IOutputHandler
    ) {}

    pickup(item: IItem): void {
        if(this.inventoryManager.addItem(item)) {
            return this.outputHandler.println(`Picked up ${item.itemName}`)
        }
        return this.outputHandler.println(`Unable to pick up ${item.itemName}`)
    }
}