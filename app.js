const result = document.getElementById("result");
const upperCase = document.getElementById("uppercase");
const lowerCase = document.getElementById("lowercase");
const numbers = document.getElementById("numbers");
const symbols = document.getElementById("symbols");
const UPPERCASECHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const LOWERCASECHARS = "abcdefghijklmnopqrstuvwxyz";
const NUMBERSCHARS = "0123456789";
const SYMBOLSCHARS = "!@#$%^&*()_+=`;,./\\";

function getValues(lenghtOfPass, letters) {
    let allowedChars = "";
    allowedChars += upperCase.checked ? UPPERCASECHARS : "";
    allowedChars += lowerCase.checked ? LOWERCASECHARS : "";
    allowedChars += numbers.checked ? NUMBERSCHARS : "";
    allowedChars += symbols.checked ? SYMBOLSCHARS : "";
    for(let i = 0; i < lenghtOfPass; i++) {
        const value = Math.floor(Math.random() * allowedChars.length);
        letters.push(allowedChars[value]);
    }
}

function generatePass() {
    if (!upperCase.checked && !lowerCase.checked && !numbers.checked && !symbols.checked) {
        result.textContent = "YOUR PASS SHOULD CONTAIN SOMETHING BRO!"
        return;
    }
    if (document.getElementById("lengthOfPass").value == "") {
        result.textContent = "GIVE ME A CORRECT NUM BRO!"
        return;
    }

    const lenghtOfPass = document.getElementById("lengthOfPass").value;
    const letters = [];
    getValues(lenghtOfPass, letters);
    result.textContent = letters.join("");
}