import { CommandType } from "../../constants/CommandTypes";

export interface ICommand {
    command: CommandType
    commandAsText: string
    arguments: string
}