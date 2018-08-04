export interface IItem {
    itemName: string
    use(): void
    break(): void
    pickup(): void
    toString(): string
}