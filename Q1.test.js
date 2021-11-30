const { Multiplication } = require('./Q1')
const TestOperations = require('./Q1')
var oper = require('./Q1')

//Test for Addition Function
test("Addition Test",()=>{
    expect(TestOperations.Addition(3,2)).toBe(5)
})

//Test for Subtraction Function
test("Subtraction Test",()=>{
    expect(TestOperations.Subtraction(5,1)).toBe(4);
})

//Test for Multiplication Function
test("Multiplication Test",()=>{
    expect(TestOperations.Multiplication(3,4)).toBe(12);
})