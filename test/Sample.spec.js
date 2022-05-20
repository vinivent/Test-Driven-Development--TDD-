import chai from "chai";
import { it } from "mocha";
import TestDrivenDevelopment from "../src/Test.js";
const expect = chai.expect


describe("Sum test", () => {
    it("Must sum 4 and 5, resulting into 9.", () => {
        const result = TestDrivenDevelopment.sum(4, 5)
        expect(result).to.be.eq(9)

    }) 

});

describe("Subtract test", () => {
    it("Subtracing 17 and 10, must result 7.", () => {
        const result = TestDrivenDevelopment.subtract(10,17);
        expect(result).to.be.eq(7)
    })
});