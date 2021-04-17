const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];
// best practice to write variable names wth camelcase// currentResult = defaultResult + 10; // == currentResult += 10;

/**
 * 
 * @returns userinput
 * Gets input form input filed
 */
function getUserInput() {
    return parseInt(userInput.value);
}

/**
 * 
 * @param {+} operator 
 * @param {*} resultBerforeCalc 
 * @param {*} userEnteredNumber 
 * 
 * Generate and write log 
 */
function createAndWriteOutput(operator, resultBerforeCalc, userEnteredNumber) {
    const calculationDescription = `${resultBerforeCalc} ${operator} ${userEnteredNumber}`;
    outputResult(currentResult, calculationDescription); //loding form vendor file
}

function addition() {
    const enteredNumber = getUserInput();
    const initialResult = currentResult;
    currentResult += enteredNumber;
    createAndWriteOutput('+', initialResult, enteredNumber);
    logEntries.push(enteredNumber);
    console.log(logEntries);
}

function subtraction() {
    const enteredNumber = getUserInput();
    const initialResult = currentResult;
    currentResult -= enteredNumber;
    createAndWriteOutput('-', initialResult, enteredNumber);
}

function multiplication() {
    const enteredNumber = getUserInput();
    const initialResult = currentResult;
    currentResult *= enteredNumber;
    createAndWriteOutput('*', initialResult, enteredNumber);
}

function division() {
    const enteredNumber = getUserInput();
    const initialResult = currentResult;
    currentResult /= enteredNumber;
    createAndWriteOutput('/', initialResult, enteredNumber);
}

addBtn.addEventListener('click', addition);
subtractBtn.addEventListener('click', subtraction);
multiplyBtn.addEventListener('click', multiplication);
divideBtn.addEventListener('click', division);