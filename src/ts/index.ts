import '../styles/index.scss';
import { Game } from './entities/Game';
import { Elements } from './elements/elements';
import { container } from './inversify.config';
import { TYPES } from './constants/Types';

// Set elements
const outputElement = <HTMLElement>document.querySelector('#gamearea');
const inputElement = <HTMLInputElement>document.querySelector('#inputelement');

// Set Elements in the static Elements class
Elements.inputElement = inputElement;
Elements.outputElement = outputElement;

// Initialize game
const game = container.get<Game>(TYPES.Game);

// Run game
game.run();
