import { Room } from "../entities/Room"
import { Item } from "../entities/Item"
import { IRoom } from "../abstract/entities/IRoom";
import { Container } from "../../../node_modules/inversify";
import { NoUseBehaviour } from "../entities/ItemBehaviour/NoUseBehaviour";
import { NoBreakBehaviour } from "../entities/ItemBehaviour/NoBreakBehaviour";
import { ExpandInventoryUseBehaviour } from "../entities/ItemBehaviour/ExpandInventoryUseBehaviour";
import { BedUseBehaviour } from "../entities/ItemBehaviour/BedUseBehaviour";

export class GameData {
    public static START: IRoom

    public static init(container: Container) {
        // Behaviours
        const noUseBehaviour = container.get(NoUseBehaviour)
        const noBreakBehaviour = container.get(NoBreakBehaviour)

        const bedUseBehaviour = container.get(BedUseBehaviour)

        const expandInventoryBehaviour = container.get(ExpandInventoryUseBehaviour)

        // Rooms
        const P1R1_BEDROOM = new Room("P1R1_START", "Bedroom")
        const P1R1_HALLWAY = new Room("P1R1_HALLWAY", "Hallway")
        const P1R1_BATHROOM = new Room("P1R1_BATHROOM", "Bathroom")

        // Items
        const bed = new Item("Bed", bedUseBehaviour, noBreakBehaviour)
        const deadPlant = new Item("Dead Plant", noUseBehaviour, noBreakBehaviour)
        const backpack = new Item("BackPack", expandInventoryBehaviour, noBreakBehaviour, true, "A brown backpack in OK condition, perhaps I could use it?")

        // Add items to rooms
        P1R1_BEDROOM.addItem(bed)
        P1R1_BEDROOM.addItem(deadPlant)
        P1R1_BEDROOM.addItem(backpack)

        P1R1_HALLWAY.addItem(deadPlant)

        // Add initial text to rooms
        P1R1_BEDROOM.startText = "The bedroom is dusty and looks dilapidated, judging from the bed it looks like a bedroom"
        P1R1_HALLWAY.startText = "It's a rather long rectangular hallway with brown carpet and blue walls"
        P1R1_BATHROOM.startText = "This bathroom stinks terribly, there is mold all over the walls and the toilet looks"

        // Apply connections
        P1R1_BEDROOM.addAdjacentRoom(P1R1_HALLWAY)
        P1R1_HALLWAY.addAdjacentRoom(P1R1_BEDROOM)

        P1R1_BATHROOM.addAdjacentRoom(P1R1_HALLWAY)
        P1R1_HALLWAY.addAdjacentRoom(P1R1_BATHROOM)

        // Set static value
        GameData.START = P1R1_BEDROOM
    }
}