export interface ICommand {
    defaultArguments: string
    execute(): void
}