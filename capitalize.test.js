const capitalize= require('./capitalize');

test("The given string is capitalized", ()=>{
    const str= "hello world";
    expect(capitalize(str)).toBe("Hello world");
});