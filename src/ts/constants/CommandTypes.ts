import { ICommandType } from '../abstract/utils/ICommandType';
import { CommandType } from '../utils/CommandType';

export const CommandTypes: Array<ICommandType> = [
	new CommandType('help', 'h', 'List of commands'),
	new CommandType('use', 'u', 'Use an item'),
	new CommandType('inventory', 'inv', 'View inventory'),
	new CommandType('ping', 'p', 'Pong!'),
	new CommandType('location', 'l', 'Player location'),
	new CommandType('observe', 'o', 'Observe location'),
	new CommandType('clear', 'c', 'Clear screen'),
	new CommandType('moveto', 'mt', 'Move to room'),
	new CommandType('pickup', 'pu', 'Pickup item'),
	new CommandType('info', 'i', 'Info on inventoryitem'),
	new CommandType('drop', 'd', 'Drop item'),
	new CommandType('map', 'm', 'Map')
];
