import { Command } from "../Command";

export class InventoryCommand extends Command {
    execute(): void {
        this.outputHandler.println(200, `Inventory (${this.inventoryManager.getAmountOfItems()}/${this.inventoryManager.getMaxItems()}): ${this.inventoryManager.toString()}`)
    }
}