'use strict'
var prime = require("./src/isPrime");
var arr = prime.displayPrime();
for(let i=0; i<arr.length; i++){
    console.log(arr[i]);
}