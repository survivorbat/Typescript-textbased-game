import "reflect-metadata"
import { Container } from "inversify"
import { TYPES } from "./constants/types"
import { IOutputHandler } from "./abstract/utils/IOutputHandler"
import { OutputHandler } from "./utils/OutputHandler"
import { IInputHandler } from "./abstract/utils/IInputHandler";
import { InputHandler } from "./utils/InputHandler";
import { ICommandHandler } from "./abstract/utils/ICommandHandler";
import { CommandHandler } from "./utils/CommandHandler";
import { IGame } from "./abstract/entities/IGame";
import { Game } from "./entities/Game";
import { IPlayer } from "./abstract/entities/IPlayer";
import { Player } from "./entities/Player";
import { IInventory } from "./abstract/entities/IInventory";
import { Inventory } from "./entities/Inventory";
import { IInventoryManager } from "./abstract/utils/IInventoryManager";
import { InventoryManager } from "./utils/InventoryManager";
import { IRoomManager } from "./abstract/utils/IRoomManager";
import { RoomManager } from "./utils/RoomManager";

const container = new Container()
container.bind<IOutputHandler>(TYPES.OutputHandler).to(OutputHandler)
container.bind<IInputHandler>(TYPES.InputHandler).to(InputHandler)
container.bind<ICommandHandler>(TYPES.CommandHandler).to(CommandHandler)
container.bind<IGame>(TYPES.Game).to(Game)
container.bind<IPlayer>(TYPES.Player).to(Player).inSingletonScope()
container.bind<IInventory>(TYPES.Inventory).to(Inventory).inSingletonScope()
container.bind<IInventoryManager>(TYPES.InventoryManager).to(InventoryManager)
container.bind<IRoomManager>(TYPES.RoomManager).to(RoomManager)

export { container }