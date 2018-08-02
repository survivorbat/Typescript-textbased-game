import { IObject } from "../abstract/entities/IObject";

export abstract class Object implements IObject {
    abstract use(): void
    abstract break(): void
}