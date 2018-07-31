import '../styles/index.scss'
import { Game } from './entities/Game';
import { OutputHandler } from './utils/OutputHandler';

const gameArea = <Element>document.querySelector("#gamearea")
const inputArea = <Element>document.querySelector("#inputarea")

const game = new Game(inputArea, new OutputHandler(gameArea))

game.run()