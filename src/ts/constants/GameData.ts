import { Room } from "../entities/Room"
import { TYPES } from "./Types"
import { Item } from "../entities/Item"
import { IRoom } from "../abstract/entities/IRoom";
import { Container } from "../../../node_modules/inversify";
import { IBreakBehaviour } from "../abstract/utils/IBreakBehaviour";
import { IPickupBehaviour } from "../abstract/utils/IPickupBehaviour";
import { IUseBehaviour } from "../abstract/utils/IUseBehaviour";

export class GameData {
    public static START: IRoom

    public static init(container: Container) {
        // Bedbehaviour
        const bedUseBehaviour = container.get<IUseBehaviour>(TYPES.BedUseBehaviour)
        const bedPickupBehaviour = container.get<IPickupBehaviour>(TYPES.BedPickupBehaviour)
        const bedBreakBehaviour = container.get<IBreakBehaviour>(TYPES.BedBreakBehaviour)

        // Rooms
        const P1R1_BEDROOM = new Room("P1R1_START", "Bedroom")
        const P1R1_HALLWAY = new Room("P1R1_HALLWAY", "Hallway")
        const P1R1_BATHROOM = new Room("P1R1_BATHROOM", "Bathroom")
        const P1R1_BEDROOM_BED = new Room("P1R1_START_BED", "Bedroom's bed")

        // Items
        const bed = new Item("Bed", "An old rusty bed", bedUseBehaviour, bedBreakBehaviour, bedPickupBehaviour)
        // const deadPlant = 
        // const backpack = 

        // Add items to rooms
        P1R1_BEDROOM.addItem(bed)
        // P1R1_BEDROOM.addItem(deadPlant)
        // P1R1_BEDROOM.addItem(backpack)

        // P1R1_HALLWAY.addItem(deadPlant)

        // Add initial text to rooms
        P1R1_BEDROOM.startText = "The bedroom is dusty and looks dilapidated, judging from the bed it looks like a bedroom"
        P1R1_HALLWAY.startText = "It's a rather long rectangular hallway with brown carpet and blue walls"
        P1R1_BATHROOM.startText = "This bathroom stinks terribly, there is mold all over the walls and the toilet looks"

        // Apply connections
        P1R1_BEDROOM.roomRight = P1R1_HALLWAY
        P1R1_HALLWAY.roomLeft = P1R1_BEDROOM

        P1R1_BATHROOM.roomLeft = P1R1_HALLWAY
        P1R1_HALLWAY.roomRight = P1R1_BATHROOM

        // Set static value
        GameData.START = P1R1_BEDROOM
    }
}