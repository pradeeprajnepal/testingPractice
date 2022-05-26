const reverseStr= require("./reverseString");

test("The string is reversed",()=>{
    let str= "hello world";
    expect (reverseStr(str)).toBe("dlrow olleh");
})