function analyzeArr(arr){
    const length= arr.length;
    const min = Math.min (...arr);
    const max= Math.max(...arr);
    let average=0;
    for (let i=0; i<length;i++){
        average+=arr[i];
    }
    average/=length;
    return {
        average,
        min,
        max,
        length
    }
}

module.exports= analyzeArr;