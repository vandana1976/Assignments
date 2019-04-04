// function add(){
// var a = "This variable is only visible inside the add function";

// }
// console.log(a)// undefined because it was loval to th efunction only.

//2// function getGreeting(name){
//     var greeting = "hello";
//     return greeting + name;
// }
// getGreeting('Max');// hello Max
// console.log(greeting); //undefined

// //Lexical scoping means variables refer to their local environmet.

// 3//for (var i=0; i<10; i++){
//     var x = i;
// }
// console.log(i,x); //it shows 10 and 9 because for is not a function but a loop

function greeting(){
    greeting = "hello";
    return greeting + name
}

//scope nested in another scope 

// var city = 'Charlotte'     
// var greet = function(){
//     console.log("Hello" + city);
// }

// greet()
// //it looks inside local scope first 

// function outer(){
//     var x = 'x';
//     function inner(){
//         var y =  'y';
//         console .log(x);
//     }
//     console .log(x);
//     console .log(y);
// }
// //nested scope example

// var landscape = function(){
//     var result = '';

//     var flat = function(size){
//         for(var count = 0; count <size; count++)
//         result += "_";
//     };
//     var mountain = function(size){
//         result += '/';
//         for (var count = 0; count<size; count++)
//         result+="'";
//         reslt +="//";
//     };
//     flat(3);
//     mountain(4);
//     flat(6);
//     mountain(1);
//     flat(1);
//     return result;
// }

// console.log(landscape());

//5//
// var name = 'Jack';
// var greet = function(){
//     var name = 'Rose' // change to const name = "Rose"
//     console.log(name);//Jack
// }
// console.log(name);//Rose
// console.log(greet(name)); //undefined

//6//
// const name = 'Jack';
// var greet = function(name){
//     console.log(name);
// }
// greet('Joe'); // JOe

// var greet = function(superuniqueVariable){
//     var name = superuniqueVariable;
//     console.log(name);
// }
// greet('Joe');  //Joe

// //7
// const teacher = {
//     name:  'Jimmy',
//     sayName: function(){
//         console.log(this.name);
//     }

// }

// teacher.sayName();

//8//
// function sayName(){
//     console.log(this.name)

// }
// const teacher1 = {
//     name:  "Jimmy",
//     speak: sayName
// }
// const teacher2 = {
//     name: "Chris",
//     speak: sayName
// }
// teacher1.speak();
// teacher2.speak();

