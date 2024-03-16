const elements = {
    cardHolderName: {
        input: document.querySelector("#cardholder-name"),
        text: document.querySelector(".card__owner"),
        initialText: document.querySelector(".card__owner").textContent
    },
    cardNumber: {
        input: document.querySelector("#card-number"),
        text: document.querySelector(".card__number"),
        initialText: document.querySelector(".card__number").textContent
    },
    expiracyMonth: {
        input: document.querySelector("#mm"),
        text: document.querySelector(".expiracy__month"),
        initialText: document.querySelector(".expiracy__month").textContent
    },
    expiracyYear: {
        input: document.querySelector("#yy"),
        text: document.querySelector(".expiracy__year"),
        initialText: document.querySelector(".expiracy__year").textContent
    },
    cvcCode: {
        input: document.querySelector("#cvc"),
        text: document.querySelector(".cvc__text"),
        initialText: document.querySelector(".cvc__text").textContent
    }
};

function updateTextContent(inputElement, textElement, initialText) {
    if (inputElement.value.trim() === '') {
        textElement.textContent = initialText;
    } else {
        textElement.textContent = inputElement.value;
    }
}

Object.values(elements).forEach(element => {
    element.input.addEventListener("input", () => {
        updateTextContent(element.input, element.text, element.initialText);
    });
});
