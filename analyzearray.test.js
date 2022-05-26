const analyzeArr= require ('./analyzearray');

test("The array has been analyzed.", ()=>{
    expect(analyzeArr([1,2,3])).toEqual({average:2,min:1,max:3,length:3});
})