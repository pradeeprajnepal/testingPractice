const calculator= require('./calculator');

test("The sum of the numbers ", ()=>{
    expect(calculator.sum(2,4)).toBe(6);
});

//and so on...

