export interface IOutputHandler {
    print(text: string): void

    setNextLineTextColor(color: string): void
    setNextLineBackgroundColor(color: string): void

    setContainerTextColor(color: string): void
    setContainerBackgroundColor(color: string): void

    clear(): void
}