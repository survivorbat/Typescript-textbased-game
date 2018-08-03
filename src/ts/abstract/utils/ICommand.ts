export interface ICommand {
    defaultArguments: string
    execute(): void
    setDefaultArguments(args: string): void
}