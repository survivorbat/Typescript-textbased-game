import { Container } from "inversify"
import { TYPES } from "./types"
import { IOutputHandler } from "./abstract/utils/IOutputHandler"
import { OutputHandler } from "./utils/OutputHandler"
import { IInputHandler } from "./abstract/utils/IInputHandler";
import { InputHandler } from "./utils/InputHandler";
import { ICommandHandler } from "./abstract/utils/ICommandHandler";
import { CommandHandler } from "./utils/CommandHandler";

const container = new Container()
container.bind<IOutputHandler>(TYPES.OutputHandler).to(OutputHandler)
container.bind<IInputHandler>(TYPES.InputHandler).to(InputHandler)
container.bind<ICommandHandler>(TYPES.CommandHandler).to(CommandHandler)

export { container }