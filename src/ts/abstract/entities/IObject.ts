export interface IObject {
    itemCode: string
    use(): void
    break(): void
    pickup(): boolean
}