// Task 1
function findClosestTo100(a, b) {
    return Math.abs(a - 100) < Math.abs(b - 100) ? a : b;
}
// findClosestTo100(1, 300)

// -----------------
// Task 2

function sortString(str)  {
    return str.split(' ').map(word => word.split('').sort().join('')).join(' ');
}
// sortString('My name is Alisher”');

// -----------------
// Task 3
function findFirstNonRepeated(str) {
    const charMap = {};

    for (let char of str)
        charMap[char] = (charMap[char] || 0) + 1;

    for (let char of str)
        if (charMap[char] === 1) return char;
    return "All characters are repeated";
    
}

// -----------------

// Task 4

function moveAlphabet(str) {
    return str.split('').map(char=> {
        if (char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 122)
            return String.fromCharCode((char.charCodeAt(0) - 97 + 1) % 26 + 97);
        if (char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90)
            return String.fromCharCode((char.charCodeAt(0) - 65 + 1) % 26 + 65);
    });
}

// -----------------

// Task 5

function findShortestAndLongest(str) {
    str = str.trim().split(' ').filter(word => word.length > 0);
    str.sort((a, b) => a.length - b.length);
    return [str[0], str[str.length - 1]];
}

// -----------------

// Task 6

function highlightLongWordsAndBoldShort() {
    const element = document.getElementById('task6-text');
    element.innerHTML = element.innerHTML.split(' ').map(word => {
        if (word.length >= 7) return `<span style="background-color: #aaaace">${word}</span>`;
        if (word.length <= 3) return `<b>${word}</b>`;
        return word;
    }).join(' ');
}
// -----------------

// Task 7

function replaceQuestionsAndExclamation() {
    const element = document.getElementById('task7-text');

    element.innerHTML = element.innerHTML.split('').map(char => {
        if (char === '?') return '*';
        if (char === '!') return '@';
        return char;
    }).join('');
}
// -----------------

// Task 8

function splitStringBySentence() {
    const element = document.getElementById('task8-text');
    element.innerHTML =  element.innerHTML.split('.').join('</p><p>');
}

// -----------------

// Task 9

function countWords() {
    const element = document.getElementById('task9-text');
    const words = element.innerHTML.split(' ').filter(word => word.length > 0);
    element.innerHTML = '<p><span>' + words.length + '</span> words</p>' + element.innerHTML;
}

// -----------------

// Task 10

function highlightWords() {
    const element = document.getElementById('task10-text');

    element.innerHTML = element.innerHTML.split(' ').map(word => {
        if (word.charAt(0) === 'a') return '<span style="font-style: italic; font-size:30px">' + word + '</span>';
        if (word.charAt(word.length-1) === 'y') return '<span style="text-decoration: underline; font-size:30px">' + word + '</span>';
        return word;
    }).join(' ');
}
// ----------------
// Task 11-15

function task11() {
    const radius = document.getElementById('task11-input').value;
    const result = radius * radius * Math.PI;
    document.getElementById('task11-result').innerHTML = result;
}

function task12() {
    const radius = document.getElementById('task12-input').value;
    const height = document.getElementById('task12-input-h').value;
    const result = radius * radius * Math.PI * height;
    document.getElementById('task12-result').innerHTML = result;
}

function task13() {
    const radius = document.getElementById('task13-input').value;
    const height = document.getElementById('task13-input-h').value;
    const result = radius * radius * Math.PI * height / 3;
    document.getElementById('task13-result').innerHTML = result;
}

function task14() {
    const side = document.getElementById('task14-input').value;
    const side2 = document.getElementById('task14-input-2').value;
    const height = document.getElementById('task14-input-h').value;
    const result = side * side2 * height;
    document.getElementById('task14-result').innerHTML = result;
}

function task15() {
    const width = document.getElementById('task15-input').value;
    const height = document.getElementById('task15-input-h').value;
    const result = width * height / 2;
    document.getElementById('task15-result').innerHTML = result;
}

function applyButtons11() {
    document.getElementById('task11-btn').addEventListener('click', task11);
    document.getElementById('task12-btn').addEventListener('click', task12);
    document.getElementById('task13-btn').addEventListener('click', task13);
    document.getElementById('task14-btn').addEventListener('click', task14);
    document.getElementById('task15-btn').addEventListener('click', task15);
}



// ----------------




document.addEventListener('DOMContentLoaded', () => {
    highlightLongWordsAndBoldShort();
    replaceQuestionsAndExclamation();
    splitStringBySentence();
    countWords();
    highlightWords();
    applyButtons11();
});



