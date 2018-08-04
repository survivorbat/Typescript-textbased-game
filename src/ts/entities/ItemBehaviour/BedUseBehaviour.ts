import { IUseBehaviour } from "../../abstract/utils/IUseBehaviour";
import { IRoomManager } from "../../abstract/utils/IRoomManager";
import { inject, injectable } from "../../../../node_modules/inversify";
import { TYPES } from "../../constants/Types";

@injectable()
export class BedUseBehaviour implements IUseBehaviour {

    constructor(
        @inject(TYPES.RoomManager) private roomManager: IRoomManager
    ) {}

    use(): void {
        
    }
}