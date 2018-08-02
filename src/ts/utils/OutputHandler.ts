import { IOutputHandler } from "../abstract/utils/IOutputHandler";
import { injectable } from "inversify"
import { Elements } from "../elements/elements";

@injectable()
export class OutputHandler implements IOutputHandler {
    private outputElement?: HTMLElement   
    private nextLineTextColor: string = "greenyellow";
    private nextLineBackgroundColor: string = "rgb(0,10,0)";

    constructor() {
        this.outputElement = Elements.outputElement
    }

    public setElement(element: HTMLElement): void {
        this.outputElement = element
    }

    public print(text: string): void {
        if(!this.outputElement) { return }
        let newElement = document.createElement("span")
        newElement.textContent = text
        newElement.style.color = this.nextLineTextColor
        newElement.style.backgroundColor = this.nextLineBackgroundColor
        this.outputElement.appendChild(newElement)
    }

    public println(code: number, text: string): void {
        if(!this.outputElement) { return }
        let newElement = document.createElement("div")
        newElement.textContent = `> ${code}: ${text}`
        newElement.style.color = this.nextLineTextColor
        newElement.style.backgroundColor = this.nextLineBackgroundColor
        this.outputElement.appendChild(newElement)
    }

    public setNextLineTextColor(color: string): void {
        this.nextLineTextColor = color
    }

    public setNextLineBackgroundColor(color: string): void {
        this.nextLineBackgroundColor = color
    }

    public setContainerTextColor(color: string): void {
        throw new Error("Method not implemented.");
    }

    public setContainerBackgroundColor(color: string): void {
        throw new Error("Method not implemented.");
    }

    public setNextLineFontSize(size: string): void {
        throw new Error("Method not implemented.");
    }

    public clear(): void {
        if(!this.outputElement) { return }
        this.outputElement.innerHTML = ""
    }
}