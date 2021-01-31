'use strict'

function displayPrime(){
    var arr = [];
    
    for(let i=1; i<=100; i++){
        arr.push(i);
    }
    console.log(arr)
    var num = 0;
    var res = arr.filter(function(el){
        var count = 0;
        for(let j=1; j<=el && count<=2; j++){
            el % j ===0 && count++;
            num++;
        }
        return count === 2;
    });
    //console.log(num);
    console.log(res);
    return res;
    
}
//console.log("hellow!")
displayPrime()