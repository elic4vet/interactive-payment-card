const elements = {
    cardHolderName: {
        input: document.querySelector("#cardholder-name"),
        text: document.querySelector(".card__owner")
    },
    cardNumber: {
        input: document.querySelector("#card-number"),
        text: document.querySelector(".card__number")
    },
    expiracyMonth: {
        input: document.querySelector("#mm"),
        text: document.querySelector(".expiracy__month")
    },
    expiracyYear: {
        input: document.querySelector("#yy"),
        text: document.querySelector(".expiracy__year")
    },
    cvcCode: {
        input: document.querySelector("#cvc"),
        text: document.querySelector(".cvc__text")
    }
};


function updateTextContent(inputElement, textElement) {
    textElement.textContent = inputElement.value;
}

Object.values(elements).forEach(element => {
    element.input.addEventListener("input", () => {
        updateTextContent(element.input, element.text);
    });
});
