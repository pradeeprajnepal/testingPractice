const caeserCipher = require ('./caesarcipher');

test("The cipher is decoded", ()=>{
    expect(caeserCipher("gdkkn vnqkc", 1)).toBe("hello world");
})