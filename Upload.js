var add = function(a,b){
    return a + b;
}
var subtract = function(c,d){
    return c - d;
}
var multiply = function(e,f){
    return e * f;
}
var divide = function(g,h){
    return g / h;
}
console.log(add(2,3));
console.log(subtract(5,1));
console.log(multiply(7,3));
console.log(divide(8,4));

var Array1 = [337, 67, 7];
var diff;
    for(var x = 0; x < Array1.length-1; x++){
       diff = Array1[x] - Array1[x+1];
       console.log(diff);
    }
    
console.log( diff );