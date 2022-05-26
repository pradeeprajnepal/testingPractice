function caeserCipher(str, num){
    let strLowerCase= str.toLowerCase();
    let alphabet= "abcdefghijklmnopqrstuvwxyz".split("");
    let newStr= "";

    for (let i=0; i<strLowerCase.length; i++){
        let currentLetter= strLowerCase[i];
        if (currentLetter === " "){
            newStr+= currentLetter;
            continue;
        }
        let currentIndex= alphabet.indexOf(currentLetter);
        let newIndex= currentIndex + num ;
        if (newIndex>25)newIndex-=26;
        if (newIndex<0)newIndex+=26;
        if(str[i]===str[i].toUpperCase()){
            newStr += alphabet[newIndex].toUpperCase();
        }
        else newStr += alphabet[newIndex];
        
    }
    return newStr;
}

module.exports= caeserCipher;

console.log(caeserCipher("gdkkn vnqkc",1));