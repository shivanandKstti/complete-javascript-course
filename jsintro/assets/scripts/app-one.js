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

function writeLog(operationIdentifier, prevResult, userEnteredNumber, finalResult) {
    const logEntry = {
        operation: operationIdentifier,
        prevRes: prevResult,
        userInput: userEnteredNumber,
        result: finalResult,
    }
    logEntries.push(userEnteredNumber);
    console.log(logEntry);
}

function addition() {
    const enteredNumber = getUserInput();
    const initialResult = currentResult;
    currentResult += enteredNumber;
    createAndWriteOutput('+', initialResult, enteredNumber);
    writeLog('ADD', initialResult, enteredNumber, currentResult);
}

function subtraction() {
    const enteredNumber = getUserInput();
    const initialResult = currentResult;
    currentResult -= enteredNumber;
    createAndWriteOutput('-', initialResult, enteredNumber);
    writeLog('SUBSTRACT', initialResult, enteredNumber, currentResult);
}

function multiplication() {
    const enteredNumber = getUserInput();
    const initialResult = currentResult;
    currentResult *= enteredNumber;
    createAndWriteOutput('*', initialResult, enteredNumber);
    writeLog('MULTIPLY', initialResult, enteredNumber, currentResult);
}

function division() {
    const enteredNumber = getUserInput();
    const initialResult = currentResult;
    currentResult /= enteredNumber;
    createAndWriteOutput('/', initialResult, enteredNumber);
    writeLog('DIVIDE', initialResult, enteredNumber, currentResult);
}

addBtn.addEventListener('click', addition);
subtractBtn.addEventListener('click', subtraction);
multiplyBtn.addEventListener('click', multiplication);
divideBtn.addEventListener('click', division);