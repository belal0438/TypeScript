
const Num1Element = document.getElementById('num1') as HTMLInputElement;
const Num2Element = document.getElementById('num2') as HTMLInputElement;
const ButtonElement = document.querySelector('button')!;

const numResults: Array<number> = [];
const textResults: string[] = [];



type NumOrString = number | string;


function Add(num1: NumOrString, num2: NumOrString) {
    if (typeof num1 === 'number' && typeof num2 === 'number') {
        return num1 + num2;
    } else if (typeof num1 === 'string' && typeof num2 === 'string') {
        return num1 + " " + num2;
    }
    return +num1 + +num2;
}


type Result = { val: number; timestamp: Date }

interface ResultObj {
    val: number;
    timestamp: Date;
}

function printResult(resultObj: ResultObj) {
    console.log(resultObj.val)
}




ButtonElement.addEventListener('click', () => {
    const num1 = Num1Element.value;
    const num2 = Num2Element.value;
    const result = Add(+num1, +num2)
    numResults.push(result as number)

    const Stringresult = Add(num1, num2)
    textResults.push(Stringresult as string)


    printResult({ val: result as number, timestamp: new Date() })

    console.log(numResults, textResults);
});


const myPromise = new Promise<string>((resolve, reject) => {
    setTimeout(() => {
        resolve('It worked!');
    }, 100)
});

myPromise.then((result) => {
    console.log(result.split('w'));
})