import { Item } from "../Item";

export class Backpack extends Item {
    pickupable: boolean = true
    use(): void {
        throw new Error("Method not implemented.");
    }    
    
    break(): void {
        throw new Error("Method not implemented.");
    }
}