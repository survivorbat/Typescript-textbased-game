import { injectable, inject } from "../../../node_modules/inversify";
import { IRoomManager } from "../abstract/utils/IRoomManager";
import { IRoom } from "../abstract/entities/IRoom";
import { IPlayer } from "../abstract/entities/IPlayer";
import { TYPES } from "../constants/Types";
import { IOutputHandler } from "../abstract/utils/IOutputHandler";

@injectable()
export class RoomManager implements IRoomManager {

    /**
     * Constructor
     * @param player object
     * @param outputHandler to handle messages
     */
    constructor(
        @inject(TYPES.Player) private readonly player: IPlayer,
        @inject(TYPES.OutputHandler) private readonly outputHandler: IOutputHandler
    ) {}
    
    /**
     * Move to a different room
     * @param room to move to
     * @returns true or false whether it worked or not
     */
    moveToRoom(room: IRoom): boolean {
        if(!room.locked) {
            this.player.location = room
            this.player.location.init(this.outputHandler)
            return true
        }
        return false
    }

    /**
     * Get room object
     * @param name of the room
     * @returns room or null
     */
    getRoom(name: string): IRoom | null {
        name = name.trim().toLowerCase()
        if(this.player.location) {
            if(this.player.location.roomRight && this.player.location.roomRight.roomName.toLowerCase() === name) {
                return this.player.location.roomRight
            } else if(this.player.location.roomLeft && this.player.location.roomLeft.roomName.toLowerCase() === name) {
                return this.player.location.roomLeft
            } else if(this.player.location.roomUp && this.player.location.roomUp.roomName.toLowerCase() === name) {
                return this.player.location.roomUp
            } else if(this.player.location.roomDown && this.player.location.roomDown.roomName.toLowerCase() === name) {
                return this.player.location.roomDown
            }
        }
        return null
    }
}