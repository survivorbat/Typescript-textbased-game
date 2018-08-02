import { IRoom } from "../abstract/entities/IRoom";
import { Room } from "../entities/Room";
import { Bed } from "../entities/items/Bed"

const P1R1_BEDROOM = new Room("P1R1_START", "Bedroom")
const P1R1_BED = new Room("P1R1_START_BED", "Bedroom's bed")

const bed = new Bed("BED", "Bed")
P1R1_BEDROOM.addItem(bed)

export {P1R1_BED, P1R1_BEDROOM}