function capitalize(inputString) {
    return inputString.charAt(0).toUpperCase() + inputString.slice(1); 
}

function reverseString(inputString) {
    return [...inputString].reverse().join('');
}

function caesarCipher(inputString, shift) {
    return [...inputString].map((x) => {
            if(x === ' ') return x;
            let code;
            if(x.charCodeAt() < 97) {
                code = (x.charCodeAt() + shift) % 91 + ( x.charCodeAt() + shift < 91 ? 0 : 65);
            } 
            else {
                code = (x.charCodeAt() + shift) % 123 + ( x.charCodeAt() + shift < 123 ? 0 : 97);
            }
            return String.fromCharCode(code);
        }).join('');
}

function arrayAnalyze(array) {
    let min = Math.min(...array);
    let max = Math.max(...array);
    let average = array.reduce((total, x) => total + x, 0) / array.length;
    let length = array.length;
    return { average, min, max, length };
}

const calculator = {
    add: (a, b) => {
        return a + b; 
    },

    subtract: (a, b) => {
        return a - b;
    },

    divide: (a, b) =>  {
        return a / b;
    },

    multiply: (a, b) => {
        return a * b;
    },
};

module.exports = { capitalize, reverseString, calculator, caesarCipher, arrayAnalyze};