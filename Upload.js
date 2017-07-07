var add = function(a,b){
    return a + b;
}
var subtract = function(c,d){
    return c - d;
}
var multiply = function(e,f){
    return e * f;
}
<<<<<<< HEAD
var devide = function(g,h){
    return g/h;// divide
=======
var divide = function(g,h){
    return g / h;
>>>>>>> 7b69c504f4fe47e4a492bb6ac961166f5a96c720
}
console.log(add(2,3));
console.log(subtract(5,1));
console.log(multiply(7,3));
<<<<<<< HEAD
console.log(devide(8,4));

var one = [2, 5, 6, 7, 7, 65,];

var total = one.reduce(function(sum,value){
    return sum + value;
}, 0);
console.log( total );
=======
console.log(divide(8,4));

var Array1 = [337, 67, 7];
var diff;
    for(var x = 0; x < Array1.length-1; x++){
       diff = Array1[x] - Array1[x+1];
       console.log(diff);
    }
    
console.log( diff );
>>>>>>> 7b69c504f4fe47e4a492bb6ac961166f5a96c720
