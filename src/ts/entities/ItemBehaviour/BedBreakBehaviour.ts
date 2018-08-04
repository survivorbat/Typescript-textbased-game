import { IBreakBehaviour } from "../../abstract/utils/IBreakBehaviour";
import { IRoomManager } from "../../abstract/utils/IRoomManager";
import { inject, injectable } from "../../../../node_modules/inversify";
import { TYPES } from "../../constants/Types";

@injectable()
export class BedBreakBehaviour implements IBreakBehaviour {

    constructor(
        @inject(TYPES.RoomManager) private roomManager: IRoomManager
    ) {}

    break(): void {
        
    }
}