import { IRoom } from "../abstract/entities/IRoom";
import { Room } from "../entities/Room";
import { Bed } from "../entities/objects/Bed"

const P1R1_BEDROOM = new Room("P1R1_START", "Bedroom")
const P1R1_BED = new Room("P1R1_START_BED", "Bedroom's bed")

P1R1_BEDROOM.objects.push(new Bed("BED", "Bed"))

export {P1R1_BED, P1R1_BEDROOM}