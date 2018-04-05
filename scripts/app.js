/*jslint browser, es6, multivar */
/*global window */

window.onload = function () {
    const
        ROCK = 0,
        SCISSORS = 1,
        PAPER = 2;

    let firstPlayersRandomGenerator = Math.floor(Math.random() * 3),
        secondPlayersRandomGenerator = Math.floor(Math.random() * 3),
        containerForFirstPlayersResult =
                document.getElementById(`containerForFirstPlayersResult`),
        containerForSecondPlayersResult =
                document.getElementById(`containerForSecondPlayersResult`),
        gameResultsContainer =
                document.getElementById(`gameResultsContainer`),
        firstPlayersHand = ``,
        secondPlayersHand = ``,
        output = ``;

    switch (firstPlayersRandomGenerator) {
        case ROCK:
            firstPlayersHand = `Rock`;

            break;

        case PAPER:
            firstPlayersHand = `Paper`;

            break;

        case SCISSORS:
            firstPlayersHand = `Scissors`;

            break;
    }

    switch (secondPlayersRandomGenerator) {
        case ROCK:
            secondPlayersHand = `Rock`;

            break;

        case PAPER:
            secondPlayersHand = `Paper`;

            break;

        case SCISSORS:
            secondPlayersHand = `Scissors`;

            break;
    }

    containerForFirstPlayersResult.innerHTML = `<b>${firstPlayersHand}</b>`;
    containerForSecondPlayersResult.innerHTML = `<b>${secondPlayersHand}</b>`;

    if (firstPlayersHand === secondPlayersHand) {
        output +=
            `Both players rendered the same hand, and thus, a draw has occurred.`;
    } else {
        switch (firstPlayersRandomGenerator) {
            case ROCK:
                if (secondPlayersRandomGenerator === PAPER) {
                    output +=
                        `<b>${secondPlayersHand}</b> beats ` +
                        `<b>${firstPlayersHand}</b>; Second player wins.`;
                } else {
                    output +=
                        `<b>${firstPlayersHand}</b> beats ` +
                        `<b>${secondPlayersHand}</b>; First player wins.`;
                }

                break;

            case PAPER:
                if (secondPlayersRandomGenerator === SCISSORS) {
                    output +=
                        `<b>${secondPlayersHand}</b> beats ` +
                        `<b>${firstPlayersHand}</b>; Second player wins.`;
                } else {
                    output +=
                        `<b>${firstPlayersHand}</b> beats ` +
                        `<b>${secondPlayersHand}</b>; First player wins.`;
                }

                break;

            case SCISSORS:
                if (secondPlayersRandomGenerator === ROCK) {
                    output +=
                        `<b>${secondPlayersHand}</b> beats ` +
                        `<b>${firstPlayersHand}</b>; Second player wins.`;
                } else {
                    output +=
                        `<b>${firstPlayersHand}</b> beats ` +
                        `<b>${secondPlayersHand}</b>; First player wins.`;
                }

                break;
        }
    }

    gameResultsContainer.innerHTML = output;
};
