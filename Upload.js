var add = function(a,b){
    return a+b;
}
var subtract = function(c,d){
    return c-d;
}
var multiply = function(e,f){
    return e*f;
}
var devide = function(g,h){
    return g/h;// divide
}
console.log(add(2,3));
console.log(subtract(5,1));
console.log(multiply(7,3));
console.log(devide(8,4));

var one = [2, 5, 6, 7, 7, 65,];

var total = one.reduce(function(sum,value){
    return sum + value;
}, 0);
console.log( total );