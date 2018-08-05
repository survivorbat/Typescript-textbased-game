export enum CommandType {
	help = 0,
	use,
	inventory,
	doors,
	ping,
	location,
	observe,
	clear,
	moveto,
	pickup,
	unknown,
	info,
	drop
}

export function getCommandTypeFromString(command: string): CommandType {
	const commandName = command.split(' ')[0];
	switch (commandName) {
		case 'use':
			return CommandType.use;
		case 'help':
			return CommandType.help;
		case 'inventory':
			return CommandType.inventory;
		case 'doors':
			return CommandType.doors;
		case 'ping':
			return CommandType.ping;
		case 'location':
			return CommandType.location;
		case 'observe':
			return CommandType.observe;
		case 'clear':
			return CommandType.clear;
		case 'moveto':
			return CommandType.moveto;
		case 'pickup':
			return CommandType.pickup;
		case 'info':
			return CommandType.info;
		case 'drop':
			return CommandType.drop;
		default:
			return CommandType.unknown;
	}
}
