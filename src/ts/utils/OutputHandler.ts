import { IOutputHandler } from "../abstract/utils/IOutputHandler";
import { injectable } from "inversify"
import { Elements } from "../elements/elements";

@injectable()
export class OutputHandler implements IOutputHandler {
    // Output element on the screen
    private outputElement?: HTMLElement   

    // Color of the next line
    private nextLineTextColor: string = "greenyellow";

    // Backgroundcolor of the next line
    private nextLineBackgroundColor: string = "rgb(0,10,0)";

    /**
     * Constructor
     */
    constructor() {
        this.outputElement = Elements.outputElement
    }

    /**
     * @param element that will now be the outputelement
     */
    public setElement(element: HTMLElement): void {
        this.outputElement = element
    }

    /**
     * @param text that needs to be printed
     */
    public print(text: string): void {
        if(!this.outputElement) { return }
        let newElement = document.createElement("span")
        newElement.textContent = text
        newElement.style.color = this.nextLineTextColor
        newElement.style.backgroundColor = this.nextLineBackgroundColor
        this.outputElement.appendChild(newElement)
    }

    /**
     * @param code that needs to be displayed
     * @param text line of text that needs to be printed
     */
    public println(code: number, text: string): void {
        if(!this.outputElement) { return }
        let newElement = document.createElement("div")
        newElement.textContent = `> ${code}: ${text}`
        newElement.style.color = this.nextLineTextColor
        newElement.style.backgroundColor = this.nextLineBackgroundColor
        this.outputElement.appendChild(newElement)
    }

    /**
     * @param color
     */
    public setNextLineTextColor(color: string): void {
        this.nextLineTextColor = color
    }

    /**
     * @param color
     */
    public setNextLineBackgroundColor(color: string): void {
        this.nextLineBackgroundColor = color
    }

    /**
     * @param color
     */
    public setContainerTextColor(color: string): void {
        throw new Error("Method not implemented.");
    }

    /**
     * @param color
     */
    public setContainerBackgroundColor(color: string): void {
        throw new Error("Method not implemented.");
    }

    /**
     * @param size of the text
     */
    public setNextLineFontSize(size: string): void {
        throw new Error("Method not implemented.");
    }

    /**
     * Clear text
     */
    public clear(): void {
        if(!this.outputElement) { return }
        this.outputElement.innerHTML = ""
    }
}