export function clearElement(element) {
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
}

export function renderChoices(choices, container) {
    Object.values(choices).forEach(choice => {
        const button = document.createElement('button');
        button.textContent = choice.text;
        button.onclick = () => displayOutcome(choice.outcome);
        container.appendChild(button);
    });
}

export function displayOutcome(outcome) {
    const outcomeContainer = document.getElementById('outcome');
    outcomeContainer.textContent = outcome;
}