//TODO
/*
javascript variables
*/
var fullName ="Max Squire";
var classcode = 503
console.log(fullName)
console.log(classcode)
// javascript objects
var full_name = 
{
first_name: "Max",
last_name: "Squire",
course_number:503
}
console.log(full_name)
console.log(full_name.first_name)
console.log(full_name["last_name"])

//javascript functions
function addTwoNumbers(num1, num2) {
    return num1+num2
}
console.log(addTwoNumbers(12,3))

function addThreeNumbers(num1, num2, num3) {

    return num1+num2+num3
    console.log(addThreeNumbers(12,15,30))

}

//javascript loops

for(var i=0; i< 10; i++){
    console.log(i)
    
}

//javascript if statements
var number = 9
if (number === 10) {
    console.log(" answer = " + number)
} else {
    console.log("error")
}

//const and let - const is a variable that cant be changed, but let can be changed.
const num = 3
console.log(num)

//javascript comment(single line)

/*
multi-line comment
*/ 

var sdv503 = "javascript"

var x = 3

var fullName = "Max Squire" 

//foo(x,y)
//declaring and coding a function: 

function foo(p1, p2) {
return p2 - p1 
}
foo(5, 10)
function sum(x1, x2) {
    return x1 + x2
} 
sum(10, 3)
// when adding a function declare thefunction first and then add function name and parameters after

// (=) vs (===)
// single qual assigning a value to a variable
// triple equal used with unconditional statements comparing two values

//statements vs expressions

//statements in js is something you ask the software to do for example:
var numbers 
//here we are creating a variable called numbers 

//expresions produce values, like taking two arguments and returning a value. example
var new_value = function add(add1, add2) {
    return add1 + add2
}
add(25, 75)

// expression
var x = y >= 0 ? Y : -y

// statement
if (y >= 0) {
    x = y 
} else {
    x = -y
}

function statements (x) {
    if(y >= 0) {
        return x = y
    } else {
        return x = -y
    }
}
// var x = es6_expression var x = y >= 0 ? Y : -y

var word = "letters"
console.log(word.length)

var obj = {}
// console.log(obj)
obj.foo = 123
console.log(obj)

console.log(word.toUpperCase())

// javascript values (primitives vs objects)

var obj1 = {}
var obj2 = {}
console.log(obj1 === obj1)

var number_one = 123
var number_two =123

console.log(number_one === number_two)

// Boolean: true and false
//numbers: 1234, 2313,
//strings: 'blah', "blah"
//non-values: null and undefined

var string = "squire"
console.log(str.length = 2)
console.log(str.length)

var numbers = [1, 2, 3, 4, 5]
console.log(numbers)