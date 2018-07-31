import { IOutputHandler } from "../abstract/utils/IOutputHandler";

export class OutputHandler implements IOutputHandler {
    private outputContainer: Element;    
    private nextLineTextColor: string = "greenyellow";
    private nextLineBackgroundColor: string = "rgb(0,10,0)";

    constructor(outputContainer: Element) {
        this.outputContainer = outputContainer
    }

    print(text: string): void {
        let newElement = document.createElement("span")
        newElement.textContent = "> " + text
        newElement.style.color = this.nextLineTextColor
        newElement.style.backgroundColor = this.nextLineBackgroundColor
        this.outputContainer.appendChild(newElement)
    }

    setNextLineTextColor(color: string): void {
        throw new Error("Method not implemented.");
    }

    setNextLineBackgroundColor(color: string): void {
        throw new Error("Method not implemented.");
    }

    setContainerTextColor(color: string): void {
        throw new Error("Method not implemented.");
    }

    setContainerBackgroundColor(color: string): void {
        throw new Error("Method not implemented.");
    }

    clear(): void {
        this.outputContainer.innerHTML = ""
    }
}