import { Item } from "../Item";

class Plant extends Item {
    public getPickupMessages(): Array<string> {
        return [
            "This plant is a bit too heavy to pick up, I better leave it there",
            "Oof, this plant is heavy, I better leave it be",
            "This plant is way too heavy, let's not pick it up"
        ]
    }    
    public use(): void {
        throw new Error("Method not implemented.");
    }
    public break(): void {
        throw new Error("Method not implemented.");
    }
}