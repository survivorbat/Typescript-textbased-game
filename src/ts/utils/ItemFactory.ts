import { IItemFactory } from "../abstract/utils/IItemFactory";
import { IItem } from "../abstract/entities/IItem";
import { TYPES } from "../constants/Types";
import { NoUseBehaviour } from "../entities/ItemBehaviour/NoUseBehaviour";
import { IUseBehaviour } from "../abstract/utils/IUseBehaviour";
import { inject } from "../../../node_modules/inversify";
import { NoBreakBehaviour } from "../entities/ItemBehaviour/NoBreakBehaviour";
import { IBreakBehaviour } from "../abstract/utils/IBreakBehaviour";
import { BedUseBehaviour } from "../entities/ItemBehaviour/BedUseBehaviour";
import { Item } from "../entities/Item";

export class ItemFactory implements IItemFactory {
    private readonly items: Array<IItem> = new Array<IItem>()

    constructor(
        @inject(NoUseBehaviour) private readonly noUseBehaviour: IUseBehaviour,
        @inject(NoBreakBehaviour) private readonly noBreakBehaviour: IBreakBehaviour,
        @inject(BedUseBehaviour) private readonly bedUseBehaviour: IUseBehaviour
    ) {
        this.items = [
            new Item("Bed", bedUseBehaviour, noBreakBehaviour),
            new Item("Dead Plant", noUseBehaviour, noBreakBehaviour)
        ]
    }  
    
    public getRandomItem(pickupable: boolean): IItem {
        return this.getRandomItemFromArray(this.items.filter((item: IItem) => item.pickupable === pickupable))
    }

    public getItem(itemName: string): IItem {
        const item = this.items.filter((item: IItem) => item.itemName.toLowerCase() === itemName.toLowerCase())[0]

        if(item) {
            return item
        }
        throw new Error(`Item ${itemName} could not be found`);
    }

    private getRandomItemFromArray(array: Array<IItem>): IItem {
        return array[Math.floor(Math.random() * array.length)]
    }
}