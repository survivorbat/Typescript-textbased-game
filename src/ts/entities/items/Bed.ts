import { Item } from "../Item";

export class Bed extends Item {
    public getPickupMessage(): string  {
        return "You can't pick up a bed silly!"
    }
}