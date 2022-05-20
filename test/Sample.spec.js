import chai from 'chai'
import TestDrivenDevelopment from '../src/Test.js'

const expect = chai.expect


describe('Sum test', () => {
    it('Must sum 4 and 5, resulting into 9', () => {
        let result = TestDrivenDevelopment.soma(4, 5)
        expect(result).to.be.eq(9)

    })

})