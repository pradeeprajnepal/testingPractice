function capitalize(str){
    return str
    .split('')
    .map((chr,idx)=> chr[idx?'toLowerCase':'toUpperCase']())
    .join('');
}

console.log(capitalize("hello World"));

module.exports = capitalize;