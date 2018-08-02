import { Item } from "../Item";

export class DeadPlant extends Item {
    public getPickupMessage(): string  {
        return "It's a bit too heavy to pick up, I better leave it there"
    }
}