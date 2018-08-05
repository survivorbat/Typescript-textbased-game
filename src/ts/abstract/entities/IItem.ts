export interface IItem {
	itemName: string;
	pickupable: boolean;
	use(): void;
	break(): void;
	toString(): string;
}
