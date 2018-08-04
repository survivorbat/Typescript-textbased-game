import { IBreakBehaviour } from "../../abstract/utils/IBreakBehaviour";
import { IRoomManager } from "../../abstract/utils/IRoomManager";
import { inject, injectable } from "../../../../node_modules/inversify";
import { TYPES } from "../../constants/Types";
import { IOutputHandler } from "../../abstract/utils/IOutputHandler";
import { getRandomCanNotBreakMessage } from "../../constants/Messages";
import { IItem } from "../../abstract/entities/IItem";

@injectable()
export class NoBreakBehaviour implements IBreakBehaviour {

    constructor(
        @inject(TYPES.OutputHandler) private readonly outputHandler: IOutputHandler
    ) {}

    break(item: IItem): void {
        this.outputHandler.println(getRandomCanNotBreakMessage())
    }
}