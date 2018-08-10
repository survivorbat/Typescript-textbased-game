import { ICommandType } from '../abstract/utils/ICommandType';
import { CommandType } from '../utils/CommandType';

export const CommandTypes: Array<ICommandType> = [
	new CommandType('help', 'h', 'List of commands'),
	new CommandType('use', 'u', 'Use an item'),
	new CommandType('inventory', 'i', 'View inventory'),
	new CommandType('observe', 'o', 'Observe location'),
	new CommandType('clear', 'c', 'Clear screen'),
	new CommandType('moveto', 'mt', 'Move to room'),
	new CommandType('pickup', 'pu', 'Pickup item'),
	new CommandType('drop', 'd', 'Drop item'),
	new CommandType('map', 'm', 'A list of paths displayed recursively')
];
