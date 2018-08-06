import { ICommandFactory } from '../abstract/utils/ICommandFactory';
import { ICommand } from '../abstract/utils/ICommand';
import { Command } from './Command';
import { inject, injectable } from '../../../node_modules/inversify';
import { PingExecutor } from './commandexecutors/PingExecutor';
import { ICommandExecutor } from '../abstract/utils/ICommandExecutor';
import { UnknownCommandExecutor } from './commandexecutors/UnknownCommandExecutor';
import { HelpExecutor } from './commandexecutors/HelpExecutor';
import { InventoryExecutor } from './commandexecutors/InventoryExecutor';
import { LocationExecutor } from './commandexecutors/LocationExecutor';
import { ObserveExecutor } from './commandexecutors/ObserveExecutor';
import { MapExecutor } from './commandexecutors/MapExecutor';
import { MoveToExecutor } from './commandexecutors/MoveToExecutor';
import { ClearExecutor } from './commandexecutors/ClearExecutor';
import { UseExecutor } from './commandexecutors/UseExecutor';
import { DropExecutor } from './commandexecutors/DropExecutor';
import { PickupExecutor } from './commandexecutors/PickupExecutor';
import { InfoExecutor } from './commandexecutors/InfoExecutor';
import { CommandType } from '../constants/CommandTypes';

@injectable()
export class CommandFactory implements ICommandFactory {
	constructor(
		@inject(PingExecutor) private readonly pingExecutor: ICommandExecutor,
		@inject(UnknownCommandExecutor) private readonly unknownCommandExecutor: ICommandExecutor,
		@inject(HelpExecutor) private readonly helpExecutor: ICommandExecutor,
		@inject(InventoryExecutor) private readonly inventoryExecutor: ICommandExecutor,
		@inject(LocationExecutor) private readonly locationExecutor: ICommandExecutor,
		@inject(ObserveExecutor) private readonly observeExecutor: ICommandExecutor,
		@inject(MapExecutor) private readonly mapExecutor: ICommandExecutor,
		@inject(MoveToExecutor) private readonly moveToExecutor: ICommandExecutor,
		@inject(ClearExecutor) private readonly clearExecutor: ICommandExecutor,
		@inject(UseExecutor) private readonly useExecutor: ICommandExecutor,
		@inject(DropExecutor) private readonly dropExecutor: ICommandExecutor,
		@inject(PickupExecutor) private readonly pickupExecutor: ICommandExecutor,
		@inject(InfoExecutor) private readonly infoExecutor: ICommandExecutor,
	) {}

	getCommandFromString(command: string): ICommand {
		const commandArray = command.split(' ');
		const commandNoun = commandArray[0];

		delete commandArray[0];
		const commandArguments = commandArray.join(' ');

		switch (commandNoun) {
			case CommandType.ping.name:
			case CommandType.ping.shortcut:
				return new Command(commandArguments, this.pingExecutor, command);
			case CommandType.help.name:
			case CommandType.help.shortcut:
				return new Command(commandArguments, this.helpExecutor, command);
			case CommandType.inventory.name:
			case CommandType.inventory.shortcut:
				return new Command(commandArguments, this.inventoryExecutor, command);
			case CommandType.observe.name:
			case CommandType.observe.shortcut:
				return new Command(commandArguments, this.observeExecutor, command);
			case CommandType.location.name:
			case CommandType.location.shortcut:
				return new Command(commandArguments, this.locationExecutor, command);
			case CommandType.map.name:
			case CommandType.map.shortcut:
				return new Command(commandArguments, this.mapExecutor, command);
			case CommandType.moveto.name:
			case CommandType.moveto.shortcut:
				return new Command(commandArguments, this.moveToExecutor, command);
			case CommandType.clear.name:
			case CommandType.clear.shortcut:
				return new Command(commandArguments, this.clearExecutor, command);
			case CommandType.pickup.name:
			case CommandType.pickup.shortcut:
				return new Command(commandArguments, this.pickupExecutor, command);
			case CommandType.use.name:
			case CommandType.use.shortcut:
				return new Command(commandArguments, this.useExecutor, command);
			case CommandType.drop.name:
			case CommandType.drop.shortcut:
				return new Command(commandArguments, this.dropExecutor, command);
			case CommandType.drop.name:
			case CommandType.drop.shortcut:
				return new Command(commandArguments, this.infoExecutor, command);
			default:
				return new Command(commandArguments, this.unknownCommandExecutor, command);
		}
	}
}
