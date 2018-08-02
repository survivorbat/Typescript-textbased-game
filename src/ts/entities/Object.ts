import { IObject } from "../abstract/entities/IObject";

class Object implements IObject {
    itemCode: string
    itemName: string
    info?: string
    
    constructor(itemCode: string, itemName: string) {
        this.itemCode = itemCode
        this.itemName = itemName
    }

    use(): void {

    }
    break(): void {

    }
    pickup(): boolean {
        return false
    }
}

export {Object}