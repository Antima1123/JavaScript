//Day 2


//Task 1: Declare a variable using var, assign it a number, and log the value to the console.  
var a = 10;
console.log(a)




//Task 2 : Declare a variable using let, assign it a string, and log the value to the console.
let b = 20;
console.log(b)




//Task 3: Declare a variable using const, assign it a boolean value, and log the value to the console.
const c = true;
console.log(c)




//Task 4: Create variables of different data types (number, string, boolean, object, array) and log each variable's type using the typeof operator.

//String
let name = "Antima";
console.log(typeof name)

//Number
let age = 20;
console.log(typeof age)

//Boolean
let isStudent = true;
console.log(typeof isStudent)

//object
let student = {
    name: "Antima",
    age: 20
}
console.log(typeof student)

//Array
let hobbies = ["cricket","batminton","cooking"]
console.log(hobbies)
console.log(typeof hobbies)



//Task 5: Declare a variable using let, assign it an initial value, reassign a new value, and log both values to the console
let stu = "Antima"
console.log(stu)

stu = "Vikas"
console.log(stu)




//Task 6: Try reassigning a variable declared with const and observe the error.
// const stu1 = "Antima"
// console.log(stu1)

// stu1 = "Vikas"
// console.log(stu1)
//Note: TypeError in the console




//Feature Request:
// 1. Variable Types Console Log: Write a script that declares variables of different data types and logs both the value and type of each variable to the console.

//String
let employ = "antima"
console.log(`Employ Name: ${employ} TypeOf: ${typeof employ} `)

//Number
let employAge = 20
console.log(`Employ Age: ${employAge} TypeOf: ${typeof employAge} `)

//boolean
let isEmploy = true
console.log(`isEmploy: ${isEmploy} TypeOf: ${typeof isEmploy} `)

//object
const Employ = {
    newEmploy: "antima",
    newEmployage: 20
}
const {newEmploy,
        newEmployage
} = Employ
console.log(`Employ: ${newEmploy},newEmployage: ${ newEmployage} TypeOf: ${typeof newEmploy},${typeof newEmployage} `)

//Array
const array = ["Study", "Lunch" , "Sleep"]
console.log(`Array: ${array} TypeOf: ${typeof array}`)




//Reassignment Demo: Create a script that demonstrates the difference in behavior between let and const when it comes to reassignment.

//let

let studentlet = "Antima";
console.log(`initial value of let variable: ${studentlet}`);

studentlet = "Vikas";
console.log(`initial value of let variable: ${studentlet}`);


//const

const studentconst = "Antima";
console.log(`initial value of let variable: ${studentconst}`);

studentconst = "Vikas";
console.log(`initial value of let variable: ${studentconst}`);
