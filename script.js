const messages = [
    "Are you sure?",
    "LAAAHH :((",
    "lovie naman :(",
    "PLEASE PO BEBEEE",
    "AYAW MOBA SAKIN",
    "please po maawa ka",
    "nanin pleeeaaasseeeee",
    "sige susumbong kita kay mommy",
    "wag na mabuhay sa 14",
    "joke love, say yes na! ❤️"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}
function deetsClick() {
    window.location.href = "deets.html";
}