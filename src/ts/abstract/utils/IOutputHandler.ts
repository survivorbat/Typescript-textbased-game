export interface IOutputHandler {
    setElement(element: HTMLElement): void

    print(text: string): void
    println(text: string): void

    setNextLineTextColor(color: string): void
    setNextLineBackgroundColor(color: string): void

    setNextLineFontSize(size: string): void

    setContainerTextColor(color: string): void
    setContainerBackgroundColor(color: string): void

    clear(): void
}