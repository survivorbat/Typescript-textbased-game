import { IItem } from "../abstract/entities/IItem";
import { IUseBehaviour } from "../abstract/utils/IUseBehaviour";
import { IBreakBehaviour } from "../abstract/utils/IBreakBehaviour";
import { IPickupBehaviour } from "../abstract/utils/IPickupBehaviour";

export class Item implements IItem {
    constructor(
        public readonly itemName: string, 
        private readonly useBehaviour: IUseBehaviour,
        private readonly breakBehaviour: IBreakBehaviour,
        private readonly pickupBehaviour: IPickupBehaviour,
        public readonly info: string = ""
    ) { }

    /**
     * Use the item
     */
    public use(): void {
        this.useBehaviour.use(this)
    } 
    /**
     * Break the item
     */
    public break(): void {
        this.breakBehaviour.break(this)
    }

    /**
     * pickup the item
     */
    public pickup(): void {
        this.pickupBehaviour.pickup(this)
    }

    /**
     * Tostring since
     */
    public toString(): string {
        return this.itemName
    }
}
