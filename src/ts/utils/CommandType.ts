import { ICommandType } from '../abstract/utils/ICommandType';

export class CommandType implements ICommandType {
	constructor(public readonly name: string, public readonly shortcut: string, public readonly description: string) {}
}
