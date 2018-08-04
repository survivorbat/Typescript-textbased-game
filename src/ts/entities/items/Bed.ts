import { Item } from "../Item";

export class Bed extends Item {

    /**
     * @returns a string with a message
     */
    public getPickupMessages(): Array<string>  {
        return [
            "You can't pick up a bed silly!",
            "This bed doesn't fit in my pocket",
            "I can't put a bed in my inventory..."
        ]
    }

    public use(): void {

    }

    public break(): void {

    }
}