export interface IItem {
    itemCode: string
    itemName: string
    pickupable: boolean
    use(): void
    break(): void
    getPickupMessages(): Array<string>
    toString(): string
}