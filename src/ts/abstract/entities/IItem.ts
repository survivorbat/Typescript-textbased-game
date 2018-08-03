export interface IItem {
    itemCode: string
    itemName: string
    pickupable: boolean
    use(): void
    break(): void
    getPickupMessage(): string
}