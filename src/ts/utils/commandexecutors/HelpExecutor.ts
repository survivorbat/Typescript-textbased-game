import { ICommandExecutor } from "../../abstract/utils/ICommandExecutor";
import { inject, injectable } from "../../../../node_modules/inversify";
import { TYPES } from "../../constants/Types";
import { IOutputHandler } from "../../abstract/utils/IOutputHandler";
import { COLORS } from "../../constants/Colors";

@injectable()
export class HelpExecutor implements ICommandExecutor {
    constructor(
        @inject(TYPES.OutputHandler) private readonly outputHandler: IOutputHandler
    ) {}
    
    execute(): void {
        this.outputHandler.println('Available commands:');
        this.outputHandler.setNextLineTextColor(COLORS.BLUE);
        this.outputHandler.println('---------------------------------------------');
        this.outputHandler.println('help / h - Get a list of commands');
        this.outputHandler.println('inventory / inv - View your current inventory');
        this.outputHandler.println('ping / p - pong');
        this.outputHandler.println('location / l - Get your current location');
        this.outputHandler.println('observe / o - Observe the current location');
        this.outputHandler.println('map / m - Look at the map an view recently explored rooms');
        this.outputHandler.println('clear / c - Clear screen');
        this.outputHandler.println('');
        this.outputHandler.println('moveto / mt <roomname> - Move to an adjacent room');
        this.outputHandler.println('pickup / pu <item> - Attempt to pickup an item');
        this.outputHandler.println('use / u <item> - Attempt to use an item');
        this.outputHandler.println('info / inf <item> - Study an item in your inventory');
        this.outputHandler.println('drop / d <item> - Drop item from your inventory');
        this.outputHandler.println('---------------------------------------------');
    }
}