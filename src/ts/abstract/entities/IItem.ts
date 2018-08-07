export interface IItem {
	itemName: string;
	pickupable: boolean;
	info?: string;
	use(): void;
	break(): void;
	toString(): string;
}
