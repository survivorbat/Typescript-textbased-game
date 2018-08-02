import { IOutputHandler } from "../abstract/utils/IOutputHandler"
import { Elements } from "../elements/elements"
import { IInputHandler } from "../abstract/utils/IInputHandler"
import { Command } from "../utils/Command"
import { Player } from "./Player"
import { inject, injectable } from "../../../node_modules/inversify";
import { TYPES } from "../constants/Types";
import { IPlayer } from "../abstract/entities/IPlayer";

@injectable()
export class Game {
    private readonly outputHandler: IOutputHandler
    private readonly inputHandler: IInputHandler
    private readonly player: Player

    constructor(@inject(TYPES.OutputHandler) outputHandler: IOutputHandler, @inject(TYPES.InputHandler) inputHandler: IInputHandler, @inject(TYPES.Player) player: IPlayer) {
        this.player = player
        this.inputHandler = inputHandler
        this.outputHandler = outputHandler

        Elements.inputElement.addEventListener("keypress", (event: KeyboardEvent) => {
            if(event.keyCode === 13) {
                this.inputHandler.addCommand(new Command(Elements.inputElement.value))
                this.inputHandler.execute()
                Elements.inputElement.value = ""
            }
        })

        Elements.inputElement.addEventListener("keyup", (event: KeyboardEvent) => {
            if(event.keyCode === 38) {
                Elements.inputElement.value = this.inputHandler.getCommand(this.inputHandler.commandHistoryPosition-1).commandAsText
            } else if(event.keyCode === 40) {
                Elements.inputElement.value = this.inputHandler.getCommand(this.inputHandler.commandHistoryPosition+1).commandAsText
            }
            Elements.inputElement.setSelectionRange(Elements.inputElement.value.length, Elements.inputElement.value.length)
        })
    }

    public run(): void {
        // Pretend there's something here
        Elements.inputElement.focus()
    }
}