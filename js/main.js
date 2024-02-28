import { choices } from './components/choices.js';
import { clearElement, renderChoices } from './renderer.js';

const choicesContainer = document.getElementById('choices');

function initializeGame() {
    clearElement(choicesContainer);
    renderChoices(choices.depression, choicesContainer);
}

initializeGame();
