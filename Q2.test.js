var Q2Functions = require('./Q2');
//Largest of Two Numbers
test("Largest of Two Numbers",()=>{
    expect(Q2Functions.LargestOfTwoNumbers(3,4)).toBe(4);
    expect(Q2Functions.LargestOfTwoNumbers(5,4)).not.toBe(4);
})

//Largest of Three Numbers
test("Largest of Three Numbers",()=>{
    expect(Q2Functions.LargestOfThreeNumbers(3,4,10)).toBe(10);
    expect(Q2Functions.LargestOfThreeNumbers(131,32,10)).not.toBe(32);
    expect(Q2Functions.LargestOfThreeNumbers(131,32,10)).toBe(131);
})

//Test for Factorial of number
test("Factorial of number",()=>{
    expect(Q2Functions.FactorialOfNumbers(4)).toBe(24);
})

//Test to check Even Odd
test("Check Even Odd of Number",()=>{
    expect(Q2Functions.CheckEvenOdd(10)).toBeTruthy();
    expect(Q2Functions.CheckEvenOdd(11)).toBeFalsy();
})

//Test to get largest element of array
test("Largest Element of array",()=>{
    expect(Q2Functions.LargestElementInArray([10,23,53,12,53,54,76,8,64])).toBe(76);
})

//Test to search element in array
test("Search Element of array",()=>{
    expect(Q2Functions.SearchElementInArray([10,23,53,12,53,54,76,8,64],10)).toBeTruthy();
    expect(Q2Functions.SearchElementInArray([10,23,53,12,53,54,76,8,64],11)).toBeFalsy();
})
