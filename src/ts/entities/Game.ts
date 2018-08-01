import { IOutputHandler } from "../abstract/utils/IOutputHandler"
import { Elements } from "../elements/elements"
import "reflect-metadata"
import { TYPES } from "../types"
import { IInputHandler } from "../abstract/utils/IInputHandler"
import { Command } from "../utils/Command"
import { Player } from "./Player"
import { container } from "../inversify.config"

export class Game {
    private outputHandler: IOutputHandler
    private inputHandler: IInputHandler
    private player: Player

    constructor(inputElement: HTMLInputElement, outputElement: HTMLElement) {
        Elements.inputElement = inputElement
        Elements.outputElement = outputElement

        this.player = new Player()
        this.inputHandler = container.get<IInputHandler>(TYPES.InputHandler)
        this.outputHandler = container.get<IOutputHandler>(TYPES.OutputHandler)

        inputElement.addEventListener("keypress", (event: KeyboardEvent) => {
            if(event.keyCode === 13) {
                this.inputHandler.addCommand(new Command(inputElement.value))
                this.inputHandler.execute()
                inputElement.value = ""
            }
        })

        inputElement.addEventListener("keyup", (event: KeyboardEvent) => {
            if(event.keyCode === 38) {
                inputElement.value = this.inputHandler.getCommand(this.inputHandler.commandHistoryPosition-1).commandAsText
            } else if(event.keyCode === 40) {
                inputElement.value = this.inputHandler.getCommand(this.inputHandler.commandHistoryPosition+1).commandAsText
            }
            inputElement.setSelectionRange(inputElement.value.length, inputElement.value.length)
        })
    }

    public run(): void {
        // Pretend there's something here
        Elements.inputElement.focus()
    }
}