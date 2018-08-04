import { IPickupBehaviour } from "../../abstract/utils/IPickupBehaviour";
import { inject, injectable } from "../../../../node_modules/inversify";
import { TYPES } from "../../constants/Types";
import { IOutputHandler } from "../../abstract/utils/IOutputHandler";
import { getRandomCanNotPickupMessage } from "../../constants/Messages";

@injectable()
export class NoPickupBehaviour implements IPickupBehaviour {

    constructor(
        @inject(TYPES.OutputHandler) private readonly outputHandler: IOutputHandler
    ) {}

    pickup(): void {
        this.outputHandler.println(getRandomCanNotPickupMessage())
    }
}