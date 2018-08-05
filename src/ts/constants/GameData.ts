import { Room } from '../entities/Room';
import { IRoom } from '../abstract/entities/IRoom';
import { Container } from '../../../node_modules/inversify';
import { ExpansionKit } from '../entities/specialitems/ExpansionKit';
import { IItemFactory } from '../abstract/utils/IItemFactory';
import { TYPES } from './Types';

export class GameData {
	public static START: IRoom;

	public static init(container: Container) {
		// Factory
		const itemFactory = container.get<IItemFactory>(TYPES.ItemFactory);

		// Rooms
		const P1R1_BEDROOM = new Room('P1R1_START', 'Bedroom');
		const P1R1_HALLWAY = new Room('P1R1_HALLWAY', 'Hallway');
		const P1R1_BATHROOM = new Room('P1R1_BATHROOM', 'Bathroom');

		// Items
		const bed = itemFactory.getItem('Bed');
		const backpack = new ExpansionKit('BackPack', 3, 'A brown backpack in OK condition, perhaps I could use it?');
		const toilet = itemFactory.getItem('Toilet');
		const showerCurtain = itemFactory.getItem('Shower curtain');
		const showerHead = itemFactory.getItem('Shower head');

		// Add items to rooms
		P1R1_BEDROOM.addItem(bed);
		P1R1_BEDROOM.addItem(itemFactory.getRandomItem());
		P1R1_BEDROOM.addItem(itemFactory.getRandomItem());
		P1R1_BEDROOM.addItem(backpack);

		P1R1_HALLWAY.addItem(itemFactory.getRandomItem());
		P1R1_HALLWAY.addItem(itemFactory.getRandomItem());
		P1R1_HALLWAY.addItem(itemFactory.getRandomItem());

		P1R1_BATHROOM.addItem(toilet);
		P1R1_BATHROOM.addItem(showerCurtain);
		P1R1_BATHROOM.addItem(showerHead);
		P1R1_BATHROOM.addItem(itemFactory.getRandomItem());

		// Add initial text to rooms
		P1R1_BEDROOM.startText =
			'The bedroom is dusty and looks dilapidated, judging from the bed it looks like a bedroom';
		P1R1_HALLWAY.startText = "It's a rather long rectangular hallway with brown carpet and blue walls";
		P1R1_BATHROOM.startText =
			'This bathroom stinks terribly, there is mold all over the walls and the toilet looks disgusting';

		// Apply connections
		P1R1_BEDROOM.addAdjacentRoom(P1R1_HALLWAY);
		P1R1_HALLWAY.addAdjacentRoom(P1R1_BEDROOM);

		P1R1_BATHROOM.addAdjacentRoom(P1R1_HALLWAY);
		P1R1_HALLWAY.addAdjacentRoom(P1R1_BATHROOM);

		// Set static value
		GameData.START = P1R1_BEDROOM;
	}
}
