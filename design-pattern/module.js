// Module "CalculatorModule" sử dụng Module Design Pattern
export const CalculatorModule = (function () {
    let result = 0;
    
    return {
        add(a, b) {
            result = a + b;
        },
        subtract(a, b) {
            result = a - b;
        },
        multiply(a, b) {
            result = a * b;
        },
        divide(a, b) {
            if (b !== 0) {
                result = a / b;
            } else {
                console.error('Division by zero is not allowed.');
            }
        },
        getResult() {
            return result;
        },
    };
})();