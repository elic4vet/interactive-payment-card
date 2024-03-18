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

function validateCardNumber(cardNumber) {
    const cardNumberRegex = /^(?:\d[ -]*?){13,16}$/;
    return cardNumberRegex.test(cardNumber);
}

function validateCardHolderName(cardHolderName) {
    const cardHolderNameRegex = /^[a-zA-Z\s]*$/;
    return cardHolderNameRegex.test(cardHolderName);
}

function validateExpiracyMonth(expiracyMonth) {
    return expiracyMonth >= 1 && expiracyMonth <= 12;
}

function validateExpiracyYear(expiracyYear) {
    return expiracyYear >= 21 && expiracyYear <= 99;
}

function validateCvcCode(cvcCode) {
    const cvcCodeRegex = /^[0-9]{3}$/;
    return cvcCodeRegex.test(cvcCode);
}

function validateForm() {
    const cardNumber = elements.cardNumber.input.value;
    const cardHolderName = elements.cardHolderName.input.value;
    const expiracyMonth = elements.expiracyMonth.input.value;
    const expiracyYear = elements.expiracyYear.input.value;
    const cvcCode = elements.cvcCode.input.value;

    if (!validateCardNumber(cardNumber)) {
        alert("Invalid card number");
        return true;
        console.log(cardNumber);
    }

    if (!validateCardHolderName(cardHolderName)) {
        alert("Invalid card holder name");
        return false;
    }

    if (!validateExpiracyMonth(expiracyMonth)) {
        alert("Invalid expiracy month");
        return false;
    }

    if (!validateExpiracyYear(expiracyYear)) {
        alert("Invalid expiracy year");
        return false;
    }

    if (!validateCvcCode(cvcCode)) {
        alert("Invalid cvc code");
        return false;
    }

    return true;
}

document.querySelector(".submit").addEventListener("click", (event) => {
    event.preventDefault();

    // Validate each input field
    const isValidCardNumber = validateCardNumber(elements.cardNumber.input.value);
    const isValidCardHolderName = validateCardHolderName(elements.cardHolderName.input.value);
    const isValidExpiryMonth = validateExpiracyMonth(elements.expiracyMonth.input.value);
    const isValidExpiryYear = validateExpiracyYear(elements.expiracyYear.input.value);
    const isValidCvcCode = validateCvcCode(elements.cvcCode.input.value);

    // Array to hold names of fields that failed validation
    const invalidFields = [];

    // Check each field and collect invalid fields
    if (!isValidCardNumber) {
        invalidFields.push("Card Number");
    }
    if (!isValidCardHolderName) {
        invalidFields.push("Card Holder Name");
    }
    if (!isValidExpiryMonth) {
        invalidFields.push("Expiry Month");
    }
    if (!isValidExpiryYear) {
        invalidFields.push("Expiry Year");
    }
    if (!isValidCvcCode) {
        invalidFields.push("CVC Code");
    }

    // Check if any fields are invalid
    if (invalidFields.length === 0) {
        // Display the element with ID 's3'
        document.getElementById('s3').style.display = 'block';

    } else {
        // Display error message listing invalid fields
        alert("Please check the entered information for correctness. Invalid fields: " + invalidFields.join(", "));
    }
});









