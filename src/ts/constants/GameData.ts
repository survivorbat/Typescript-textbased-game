import { Room } from '../entities/Room';
import { IRoom } from '../abstract/entities/IRoom';
import { Container } from '../../../node_modules/inversify';
import { ExpansionKit } from '../entities/specialitems/ExpansionKit';
import { IItemFactory } from '../abstract/utils/IItemFactory';
import { TYPES } from './Types';

export class GameData {
	public static START: IRoom;

	public static init(container: Container) {
		/* Get item factory */
		const itemFactory = container.get<IItemFactory>(TYPES.ItemFactory);

		/* Set rooms */
		const P1R1_BEDROOM = new Room(
			'P1R1_START',
			'Bedroom',
			'The bedroom is dusty and looks dilapidated, judging from the bed it looks like a bedroom'
		);
		const P1R2_HALLWAY = new Room(
			'P1R2_HALLWAY',
			'Hallway',
			"It's a rather long rectangular hallway with brown carpet and blue walls"
		);
		const P1R3_STAIRS_0 = new Room(
			'P1R3_STAIRS_0',
			'Ground floor Stairs',
			'A wooden staircase that creaks terribly, it allows me to access the first floor'
		);
		const P1R4_BATHROOM = new Room(
			'P1R4_BATHROOM',
			'Bathroom',
			'This bathroom stinks terribly, there is mold all over the walls and the toilet looks disgusting'
		);
		const P1R5_STAIRS_1 = new Room(
			'P1R5_STAIRS_1',
			'First floor Stairs',
			'A wooden staircase that creaks terribly, it allows me to access the second and ground floor'
		);
		const P1R6_STAIRS_2 = new Room(
			'P1R6_STAIRS_2',
			'Second floor Stairs',
			'A wooden staircase that creaks terribly, it allows me to access the third and first floor'
		);
		const P1R7_HALLWAY_2 = new Room(
			'P1R7_HALLWAY_2',
			'Down the hallway',
			'This is hallway is quite long, the walls seem even more torn on at this side'
		);
		const P1R8_SECOND_BEDROOM = new Room(
			'P1R8_SECOND_BEDROOM',
			'Second bedroom',
			'This second bedroom looks more dilapitated than the one I woke up in, this one smells even worse'
		);
		const P1R9_STUDY = new Room(
			'P1R8_STUDY',
			'Study',
			'An old study room with bookcases that line the walls. There are a few books scattered around'
		);
		const P1R10_MUSIC = new Room(
			'P1R10_MUSIC',
			'Music room',
			'There is a destroyed piano in the middle of the room, there is also a boarded off window'
		);

		/* Items */
		const bed = itemFactory.getItem('Bed');
		const backpack = new ExpansionKit('BackPack', 3, 'A brown backpack in OK condition, perhaps I could use it?');
		const toilet = itemFactory.getItem('Toilet');
		const showerCurtain = itemFactory.getItem('Shower curtain');
		const showerHead = itemFactory.getItem('Shower head');

		/* Add items to rooms */
		P1R1_BEDROOM.addItem(bed);
		P1R1_BEDROOM.addItem(itemFactory.getRandomItem());
		P1R1_BEDROOM.addItem(itemFactory.getRandomItem());
		P1R1_BEDROOM.addItem(backpack);

		P1R2_HALLWAY.addItem(itemFactory.getRandomItem());
		P1R2_HALLWAY.addItem(itemFactory.getRandomItem());
		P1R2_HALLWAY.addItem(itemFactory.getRandomItem());

		P1R4_BATHROOM.addItem(toilet);
		P1R4_BATHROOM.addItem(showerCurtain);
		P1R4_BATHROOM.addItem(showerHead);
		P1R4_BATHROOM.addItem(itemFactory.getRandomItem());

		/* Apply connections */

		// Bedroom <-> Hallway
		P1R1_BEDROOM.addPathway(P1R2_HALLWAY);

		// Hallway <-> Hallway 2
		P1R2_HALLWAY.addPathway(P1R7_HALLWAY_2);

		// Hallway <-> Bathroom
		P1R2_HALLWAY.addPathway(P1R4_BATHROOM);

		// Hallway <-> Stairs
		P1R2_HALLWAY.addPathway(P1R5_STAIRS_1);

		// Hallway 2 <-> Second bedroom
		P1R7_HALLWAY_2.addPathway(P1R8_SECOND_BEDROOM);

		// Hallway 2 <-> Study
		P1R7_HALLWAY_2.addPathway(P1R9_STUDY);

		// Hallway 2 <-> Music room
		P1R7_HALLWAY_2.addPathway(P1R10_MUSIC);

		// Stairs 1 <-> Stairs 0
		P1R5_STAIRS_1.addPathway(P1R3_STAIRS_0);

		// Stairs 1 <-> Stairs 2
		P1R5_STAIRS_1.addPathway(P1R6_STAIRS_2);

		// Set static value
		GameData.START = P1R1_BEDROOM;
	}
}

/* ####################################################################### */
/*
								# FLOOR 3 #

		???			<--->		???				<--->		???

									|
									|
									|

								Stairs  3
*/
/* ####################################################################### */
/*
								# FLOOR 2 #

		???			<--->		???				<--->		???

									|
									|
									|

								Stairs  2
*/
/* ####################################################################### */
/*
								# FLOOR 1 #
	
								Music room
									|
									|
									|

		Second Bedroom <--->	Hallway 2		<--->		Study

									|
									|
									|

		Bedroom		<--->		Hallway			<--->		Bathroom

									|
									|
									|

								Stairs  1
*/
/* ####################################################################### */
/*
								# FLOOR 0 #

		???			<--->		???				<--->		???

									|
									|
									|

								Stairs  0
*/
/* ####################################################################### */
