import '../styles/index.scss'
import { Game } from './entities/Game';

const gameArea = <HTMLElement>document.querySelector("#gamearea")
const inputArea = <HTMLInputElement>document.querySelector("#inputelement")

const game = new Game(inputArea, gameArea)

game.run()