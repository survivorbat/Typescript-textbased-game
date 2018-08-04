import "reflect-metadata"
import { Container } from "inversify"
import { TYPES } from "./constants/types"
import { IOutputHandler } from "./abstract/utils/IOutputHandler"
import { OutputHandler } from "./utils/OutputHandler"
import { IInputHandler } from "./abstract/utils/IInputHandler";
import { InputHandler } from "./utils/InputHandler";
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
import { ICommandHandler } from "./abstract/utils/ICommandHandler";
import { CommandHandler } from "./utils/CommandHandler";
import { IUseBehaviour } from "./abstract/utils/IUseBehaviour";
import { IBreakBehaviour } from "./abstract/utils/IBreakBehaviour";
import { IPickupBehaviour } from "./abstract/utils/IPickupBehaviour";
import { BedUseBehaviour } from "./entities/ItemBehaviour/BedUseBehaviour";
import { BedBreakBehaviour } from "./entities/ItemBehaviour/BedBreakBehaviour";
import { BedPickupBehaviour } from "./entities/ItemBehaviour/BedPickupBehaviour";

const container = new Container()
container.bind<IOutputHandler>(TYPES.OutputHandler).to(OutputHandler)
container.bind<IInputHandler>(TYPES.InputHandler).to(InputHandler)
container.bind<IGame>(TYPES.Game).to(Game)
container.bind<IPlayer>(TYPES.Player).to(Player).inSingletonScope()
container.bind<IInventory>(TYPES.Inventory).to(Inventory).inSingletonScope()
container.bind<IInventoryManager>(TYPES.InventoryManager).to(InventoryManager)
container.bind<IRoomManager>(TYPES.RoomManager).to(RoomManager)
container.bind<ICommandHandler>(TYPES.CommandHandler).to(CommandHandler)

container.bind<IUseBehaviour>(TYPES.BedUseBehaviour).to(BedUseBehaviour)
container.bind<IBreakBehaviour>(TYPES.BedBreakBehaviour).to(BedBreakBehaviour)
container.bind<IPickupBehaviour>(TYPES.BedPickupBehaviour).to(BedPickupBehaviour)

export { container }