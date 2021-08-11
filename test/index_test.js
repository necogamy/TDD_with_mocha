const assert = require('assert');
const Calculate = require('../index');

describe('Calculate', () => {
    describe('.factorial', () => {
        it('should return the factorial: (120) of the input: (5!)', () => {
            // Setup phase
            const input = 5;
            const factorial = 120;

            // Exercise phase
            const test = Calculate.factorial(input);

            // Verify phase
            assert.strictEqual(test, factorial);
        });

        it('should return the factorial: (6) of the input: (3!)', () => {
            const input = 3;
            const factorial = 6;

            const test = Calculate.factorial(input);

            assert.strictEqual(test, factorial);
        });

        it('should cover the edge case where input (0!) should be result (1)', () => {
            const input = 0;
            const factorial = 1;

            const test = Calculate.factorial(input);

            assert.strictEqual(test, factorial);
        });
    });

});