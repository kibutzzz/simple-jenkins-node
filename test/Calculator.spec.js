const Calculator = require("../src/calculator.js");


describe("Calculator tests", () => {

    it("should add correctly", () => {
        const calc = new Calculator();
        expect(calc.add(3,6)).toEqual(9);
    });

});
