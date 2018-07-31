import { IOutputHandler } from "../abstract/utils/IOutputHandler";
export declare class OutputHandler implements IOutputHandler {
    private outputContainer;
    private nextLineTextColor;
    private nextLineBackgroundColor;
    constructor(outputContainer: Element);
    print(text: string): void;
    setNextLineTextColor(color: string): void;
    setNextLineBackgroundColor(color: string): void;
    setContainerTextColor(color: string): void;
    setContainerBackgroundColor(color: string): void;
    clear(): void;
}
//# sourceMappingURL=OutputHandler.d.ts.map