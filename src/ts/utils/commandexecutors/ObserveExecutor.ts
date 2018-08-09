import { ICommandExecutor } from '../../abstract/utils/ICommandExecutor';
import { inject, injectable } from '../../../../node_modules/inversify';
import { TYPES } from '../../constants/DependencyTypes';
import { IOutputHandler } from '../../abstract/utils/IOutputHandler';
import { COLORS } from '../../constants/Colors';
import { IPlayer } from '../../abstract/entities/IPlayer';
import { IRoom } from '../../abstract/entities/IRoom';
import { IItem } from '../../abstract/entities/IItem';
import { IRoomDisplayer } from '../../abstract/utils/IRoomDisplayer';
import { RoomDisplayer } from '../RoomDisplayer';
import { StringArrayShuffler } from '../StringArrayShuffler';
import { IArrayShuffler } from '../../abstract/utils/IArrayShuffler';

@injectable()
export class ObserveExecutor implements ICommandExecutor {
	constructor(
		@inject(TYPES.OutputHandler) private readonly outputHandler: IOutputHandler,
		@inject(TYPES.Player) private readonly player: IPlayer,
		@inject(StringArrayShuffler) private readonly stringArrayShuffler: IArrayShuffler<string>
	) {}

	execute(): void {
		if (!this.player.location) {
			return this.outputHandler.println('Unknown player location', COLORS.YELLOW);
		}

		// Get displayer
		const roomDisplayer = new RoomDisplayer(this.player.location.width, this.player.location.height, 8);

		// Print line with name of the room in the middle in uppercase
		this.outputHandler.println(roomDisplayer.getRowWithNameCentered(this.player.location.roomName));
		this.outputHandler.println(roomDisplayer.getRow('-'));

		// Get items
		let items: Array<string> = this.player.location.items.map((item: IItem) => item.itemName);

		if (items.length < this.player.location.height) {
			items = items.concat(new Array<string>(this.player.location.height - items.length).fill(''));
		}

		// Shuffle array
		items = this.stringArrayShuffler.shuffle(items);

		// For each row print an item or just print an empty row
		for (let i: number = 0; i < this.player.location.height; i++) {
			this.outputHandler.println(roomDisplayer.getRowWithItemName(items[i]));
		}

		// Print another line
		this.outputHandler.println(roomDisplayer.getRow('-'));

		this.outputHandler.println(
			`There are ${this.player.location.getAmountOfAdjacentRooms()} doors that lead to:`,
			COLORS.LIGHTGREEN
		);
		this.outputHandler.println(`${this.player.location.getAdjacentRoomNames()}`, COLORS.BLUE);
	}
}
