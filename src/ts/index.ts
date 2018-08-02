import '../styles/index.scss'
import { Game } from './entities/Game'
import { Elements } from './elements/elements'
import { container } from './inversify.config'
import { TYPES } from './constants/Types'

const outputElement = <HTMLElement>document.querySelector("#gamearea")
const inputElement = <HTMLInputElement>document.querySelector("#inputelement")

Elements.inputElement = inputElement
Elements.outputElement = outputElement

const game = container.get<Game>(TYPES.Game)

game.run()