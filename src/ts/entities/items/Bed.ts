import { Item } from "../Item";

export class Bed extends Item {

    /**
     * @returns a string with a message
     */
    public getPickupMessage(): string  {
        return "You can't pick up a bed silly!"
    }

    public use(): void {

    }

    public break(): void {

    }
}