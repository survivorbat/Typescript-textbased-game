import { IOutputHandler } from "../abstract/utils/IOutputHandler";

export class Game {
    private inputfield: Element
    private outputHandler: IOutputHandler

    constructor(inputfield: Element, outputHandler: IOutputHandler) {
        this.inputfield = inputfield
        this.outputHandler = outputHandler
    }

    public run(): void {
        this.outputHandler.print("Let the games begin!")
    }
}