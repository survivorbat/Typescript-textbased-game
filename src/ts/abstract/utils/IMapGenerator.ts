import { IRoom } from "../entities/IRoom";

export interface IMapGenerator {
	generateMap(room: IRoom): void;
}
