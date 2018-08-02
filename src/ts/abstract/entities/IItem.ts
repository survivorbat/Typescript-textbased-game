export interface IItem {
    itemCode: string
    itemName: string
    use(): void
    break(): void
    pickup(): boolean
    getPickupMessage(): string
}