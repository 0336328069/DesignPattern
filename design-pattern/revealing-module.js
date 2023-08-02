// Module "CalculatorModule" sử dụng Module Design Pattern
export const RevealingModuleCal = (function () {
    let result = 0;
    
    function add(a, b) {
        result = a + b;
    }

    function subtract(a, b) {
        result = a - b;
    }

    function multiply(a, b) {
        result = a * b;
    }

    function divide(a, b) {
        if (b !== 0) {
            result = a / b;
        } else {
            console.error('Division by zero is not allowed.');
        }
    }

    function getResult() {
        return result;
    }
    return {
        add : add,
        subtract: subtract,
        multiply: multiply,
        divide: divide,
        getResult: getResult,
    };
})();