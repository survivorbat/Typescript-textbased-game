import { IOutputHandler } from '../abstract/utils/IOutputHandler';
import { injectable } from 'inversify';
import { Elements } from '../elements/elements';

@injectable()
export class OutputHandler implements IOutputHandler {
	private outputElement?: HTMLElement;

	private nextLineTextColor: string = 'greenyellow';

	private nextLineBackgroundColor: string = 'rgb(0,10,0)';

	private nextLineFontSize: string = '1em';

	constructor() {
		this.outputElement = Elements.outputElement;
		if (!Elements.inputElement || !Elements.outputElement) {
			console.error('Not all html elements were defined in the Elements class, exiting script');
			window.stop();
		}
	}

	/**
     * @param element that will now be the outputelement
     */
	public setElement(element: HTMLElement): void {
		this.outputElement = element;
	}

	/**
     * @param text that needs to be printed
     */
	public print(text: string): void {
		if (!this.outputElement) {
			return;
		}
		let newElement = document.createElement('span');
		newElement.textContent = text;
		newElement.style.color = this.nextLineTextColor;
		newElement.style.backgroundColor = this.nextLineBackgroundColor;
		this.outputElement.appendChild(newElement);
		this.scrollPageDown();
	}

	/**
     * @param code that needs to be displayed
     * @param text line of text that needs to be printed
     */
	public println(text: string): void {
		if (!this.outputElement) {
			return;
		}
		let newElement = document.createElement('div');
		newElement.textContent = `> ${text}`;
		newElement.style.color = this.nextLineTextColor;
		newElement.style.backgroundColor = this.nextLineBackgroundColor;
		newElement.style.fontSize = this.nextLineFontSize;
		this.outputElement.appendChild(newElement);
		this.scrollPageDown();
	}

	public printLineBreak(): void {
		if (!this.outputElement) {
			return;
		}
		const newElement = document.createElement('br');
		this.outputElement.appendChild(newElement);
		this.scrollPageDown();
	}

	/**
     * @param color
     */
	public setNextLineTextColor(color: string): void {
		this.nextLineTextColor = color;
	}

	/**
     * @param color
     */
	public setNextLineBackgroundColor(color: string): void {
		this.nextLineBackgroundColor = color;
	}

	/**
     * @param color
     */
	public setContainerTextColor(color: string): void {
		Elements.outputElement.style.color = color;
	}

	/**
     * @param color
     */
	public setContainerBackgroundColor(color: string): void {
		Elements.outputElement.style.backgroundColor = color;
	}

	/**
     * @param size of the text
     */
	public setNextLineFontSize(size: string): void {
		Elements.outputElement.style.fontSize = size;
	}

	/**
     * Clear text
     */
	public clear(): void {
		if (!this.outputElement) {
			return;
		}
		this.outputElement.innerHTML = '';
	}

	private scrollPageDown(): void {
		Elements.outputElement.scrollTo(0, Elements.outputElement.scrollHeight);
	}
}
