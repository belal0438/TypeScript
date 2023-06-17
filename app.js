"use strict";
const Num1Element = document.getElementById('num1');
const Num2Element = document.getElementById('num2');
const ButtonElement = document.querySelector('button');
const numResults = [];
const textResults = [];
function Add(num1, num2) {
    if (typeof num1 === 'number' && typeof num2 === 'number') {
        return num1 + num2;
    }
    else if (typeof num1 === 'string' && typeof num2 === 'string') {
        return num1 + " " + num2;
    }
    return +num1 + +num2;
}
function printResult(resultObj) {
    console.log(resultObj.val);
}
ButtonElement.addEventListener('click', () => {
    const num1 = Num1Element.value;
    const num2 = Num2Element.value;
    const result = Add(+num1, +num2);
    numResults.push(result);
    const Stringresult = Add(num1, num2);
    textResults.push(Stringresult);
    printResult({ val: result, timestamp: new Date() });
    console.log(numResults, textResults);
});
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('It worked!');
    }, 100);
});
myPromise.then((result) => {
    console.log(result.split('w'));
});
