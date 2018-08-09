import 'reflect-metadata';
import { Room } from '../entities/Room';
import { IRoom } from '../abstract/entities/IRoom';
import { Container } from '../../../node_modules/inversify';
import { ExpansionKit } from '../entities/specialitems/ExpansionKit';
import { IItemFactory } from '../abstract/utils/IItemFactory';
import { TYPES } from './DependencyTypes';

export class GameData {
	public static START: IRoom;

	public static init(container: Container) {
		/* Get item factory */
		const itemFactory = container.get<IItemFactory>(TYPES.ItemFactory);

		/* Set rooms */
		const F1_BEDROOM = new Room(
			'F1_START',
			'Bedroom',
			'The bedroom is dusty and looks dilapidated, judging from the bed it looks like a bedroom',
			8,
			7
		);
		const F1_HALLWAY = new Room(
			'F1_HALLWAY',
			'Hallway',
			"It's a rather long rectangular hallway with brown carpet and blue walls"
		);
		const F1_BATHROOM = new Room(
			'F1_BATHROOM',
			'Bathroom',
			'This bathroom stinks terribly, there is mold all over the walls and the toilet looks disgusting'
		);
		const F1_STAIRS = new Room(
			'F1_STAIRS',
			'Stairs 1',
			'A wooden staircase that creaks terribly, it allows me to access the second and ground floor'
		);
		const F1_HALLWAY_2 = new Room(
			'F1_HALLWAY_2',
			'Down the hallway',
			'This is hallway is quite long, the walls seem even more torn on at this side'
		);
		const F1_SECOND_BEDROOM = new Room(
			'F1_SECOND_BEDROOM',
			'Second bedroom',
			'This second bedroom looks more dilapitated than the one I woke up in, this one smells even worse'
		);
		const F1_STUDY = new Room(
			'F1_STUDY',
			'Study',
			'An old study room with bookcases that line the walls. There are a few books scattered around'
		);
		const F10_MUSIC = new Room(
			'F10_MUSIC',
			'Music room',
			'There is a destroyed piano in the middle of the room, there is also a boarded off window'
		);

		const F2_STAIRS = new Room(
			'F2_STAIRS',
			'Stairs 2',
			'A wooden staircase that creaks terribly, it allows me to access the third and first floor'
		);
		const F2_HALLWAY = new Room(
			'F2_HALLWAY',
			'Hallway',
			'The second floor hallway is shorter than the other ones. The light above on the ceiling flickers and I can see three doors, one of which looks jammed'
		);
		const F2_CONFERENCE = new Room('F2_CONFERENCE', 'Conference room', '...');
		const F2_GUESTBEDROOM = new Room('F2_GUESTBEDROOM', 'Guest Bedroom', '...');

		const F3_STAIRS = new Room(
			'F3_STAIRS',
			'Stairs 3',
			'A wooden staircase that creaks terribly, it allows me to access the second and top floor'
		);

		const F3_HALLWAY = new Room('F3_Hallway', 'Hallway', '...');
		const F3_ARCHIVE = new Room('F3_ARCHIVE', 'Archive', '...');
		const F3_STORAGEROOM = new Room('F3_STORAGEROOM', 'Storage Room', '...');

		const F0_STAIRS = new Room(
			'F0_STAIRS',
			'Stairs 0',
			'A wooden staircase that creaks terribly, it allows me to access the first floor'
		);
		const F0_HALLWAY = new Room('F0_Hallway', 'Hallway', '...');
		const F0_KITCHEN = new Room('F0_KITCHEN', 'KITCHEN', '...');
		const F0_LIVINGROOM = new Room('F0_LIVINGROOM', 'Living Room', '...');
		const F0_DININGROOM = new Room('F0_DININGROOM', 'Dining Room', '...');
		const F0_GARAGE = new Room('F0_GARAGE', 'Garage', '...');
		const F0_MAINHALL = new Room('F0_MAINHALL', 'Main hall', '...');
		const F0_BACKGARDEN = new Room('F0_BACKGARDEN', 'Back garden', '...');

		/* Items */
		const bed = itemFactory.getItem('Bed');
		const backpack = new ExpansionKit('BackPack', 3, 'A brown backpack in OK condition, perhaps I could use it?');
		const toilet = itemFactory.getItem('Toilet');
		const showerCurtain = itemFactory.getItem('Shower curtain');
		const showerHead = itemFactory.getItem('Shower head');
		const woodenDesk = itemFactory.getItem('Wooden desk');
		const emptyBookShelf = itemFactory.getItem('Empty book shelf');

		/* Add items to rooms */
		F1_BEDROOM.addItems([ bed, backpack, emptyBookShelf ].concat(itemFactory.getRandomItems(3)));
		F1_HALLWAY.addItems(itemFactory.getRandomItems(4));
		F1_BATHROOM.addItems([ toilet, showerCurtain, showerHead ].concat(itemFactory.getRandomItems(1)));
		F1_SECOND_BEDROOM.addItems([ bed, emptyBookShelf ].concat(itemFactory.getRandomItems(4, false)));
		F1_HALLWAY_2.addItems(itemFactory.getRandomItems(4, false));
		F1_STUDY.addItems(
			[ woodenDesk, emptyBookShelf, emptyBookShelf, emptyBookShelf, emptyBookShelf ].concat(
				itemFactory.getRandomItems(4)
			)
		);

		/* Apply connections */
		/* ######## FLOOR 0 ######## */
		F0_STAIRS.addPathways([ F0_HALLWAY ]);
		F0_HALLWAY.addPathways([ F0_GARAGE, F0_MAINHALL, F0_KITCHEN ]);
		F0_KITCHEN.addPathways([ F0_LIVINGROOM, F0_DININGROOM, F0_BACKGARDEN ]);

		/* ######## FLOOR 1 ######## */
		F1_HALLWAY.addPathways([ F1_BEDROOM, F1_HALLWAY_2, F1_BATHROOM, F1_STAIRS ]);

		F1_HALLWAY_2.addPathways([ F1_SECOND_BEDROOM, F1_STUDY, F10_MUSIC ]);

		F1_STAIRS.addPathways([ F0_STAIRS, F2_STAIRS ]);

		/* ######## FLOOR 2 ######## */
		F2_STAIRS.addPathways([ F2_HALLWAY, F3_STAIRS ]);
		F2_HALLWAY.addPathways([ F2_GUESTBEDROOM, F2_CONFERENCE ]);

		/* ######## FLOOR 3 ######## */
		F3_STAIRS.addPathways([ F3_HALLWAY ]);
		F3_HALLWAY.addPathways([ F3_ARCHIVE, F3_STORAGEROOM ]);

		// Set static value for starting room
		GameData.START = F1_BEDROOM;
	}
}

/* ####################################################################### */
/*
								# FLOOR 3 #

		Archive			<--->		Hallway			<--->		Storage

									|
									|
									|

								Stairs  3
*/
/* ####################################################################### */
/*
								# FLOOR 2 #

		Conference room	<--->		Hallway			<--->		Guest bedroom

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
									
								Back garden
								
									|
									|	
									|	

		Living Room				Kitchen				<--->		Dining room

									|
									|
									|

		Garage			<--->		Hallway				<--->		Main hall

									|
									|
									|

								Stairs  0
*/
/* ####################################################################### */
