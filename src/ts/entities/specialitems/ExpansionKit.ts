import { IItem } from '../../abstract/entities/IItem';

export class ExpansionKit implements IItem {
	readonly pickupable: boolean = true;

	constructor(public readonly itemName: string, public readonly size: number, public readonly info: string) {}

	use(): void {
		throw new Error('Method not implemented.');
	}

	break(): void {
		throw new Error('Method not implemented.');
	}

	toString(): string {
		return this.itemName;
	}
}
