import { Item } from "../Item";

export class DeadPlant extends Item {
    
    /**
     * @returns a string with a message
     */
    public getPickupMessages(): Array<string>  {
        return [
            "This plant is a bit too heavy to pick up, I better leave it there",
            "Oof, this plant is heavy, I better leave it be",
            "This plant is way too heavy, let's not pick it up"
        ]
    }
    
    /**
     * 
     */
    use(): void {
        throw new Error("Method not implemented.");
    }

    /**
     * 
     */
    break(): void {
        throw new Error("Method not implemented.");
    }
}