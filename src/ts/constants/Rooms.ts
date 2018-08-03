import { IRoom } from "../abstract/entities/IRoom";
import { Room } from "../entities/Room";
import { Bed } from "../entities/items/Bed"
import { DeadPlant } from "../entities/items/DeadPlant";

// Rooms
const P1R1_BEDROOM = new Room("P1R1_START", "Bedroom")
const P1R1_HALLWAY = new Room("P1R1_HALLWAY", "Hallway")
const P1R1_BEDROOM_BED = new Room("P1R1_START_BED", "Bedroom's bed")

// Items
const bed = new Bed("BED", "Bed")
const deadPlant = new DeadPlant("DEADPLANT", "Dead Plant")

// Add items to rooms
P1R1_BEDROOM.addItem(bed)
P1R1_BEDROOM.addItem(deadPlant)

P1R1_HALLWAY.addItem(deadPlant)

// Add initial text to rooms
P1R1_BEDROOM.startText = "The bedroom is dusty and looks dilapidated, judging from the bed it looks like a bedroom"
P1R1_HALLWAY.startText = "It's a rather long rectangular hallway with brown carpet and blue walls"

// Apply connections
P1R1_BEDROOM.roomRight = P1R1_HALLWAY
P1R1_HALLWAY.roomLeft = P1R1_BEDROOM

export {P1R1_BEDROOM_BED, P1R1_BEDROOM}