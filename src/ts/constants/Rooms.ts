import { IRoom } from "../abstract/entities/IRoom";
import { Room } from "../entities/Room";
import { Bed } from "../entities/items/Bed"
import { DeadPlant } from "../entities/items/DeadPlant";

const P1R1_BEDROOM = new Room("P1R1_START", "Bedroom")
const P1R1_BED = new Room("P1R1_START_BED", "Bedroom's bed")

const bed = new Bed("BED", "Bed")
const deadPlant = new DeadPlant("DEADPLANT", "Dead-Plant")

P1R1_BEDROOM.addItem(bed)
P1R1_BEDROOM.addItem(deadPlant)

export {P1R1_BED, P1R1_BEDROOM}