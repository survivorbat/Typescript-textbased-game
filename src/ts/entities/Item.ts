import { IItem } from '../abstract/entities/IItem';
import { IUseBehaviour } from '../abstract/utils/IUseBehaviour';
import { IBreakBehaviour } from '../abstract/utils/IBreakBehaviour';

export class Item implements IItem {
	constructor(
		public readonly itemName: string,
		private readonly useBehaviour: IUseBehaviour,
		private readonly breakBehaviour: IBreakBehaviour,
		public readonly pickupable: boolean = false,
		public readonly info: string = ''
	) {}

	public use(): void {
		this.useBehaviour.use(this);
	}

	public break(): void {
		this.breakBehaviour.break(this);
	}

	public toString(): string {
		return this.itemName;
	}
}
