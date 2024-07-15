//Task 1: Write a program to check if a number is positive, negative, or zero, and log the result to the console

function checkNum(num){
    if(num>0){
        console.log(`positive number ${num}`)
    }else if(num<0){
        console.log(`Negative number ${num}`)
    }else
        console.log(`num is zero ${num}`)

}
checkNum(-1)



//Task 2: Write a program to check if a person is eligible to vote (age >= 18) and log the result to the console.
function eligible(age){
    if(age>=18){
        console.log(`Eligible for voting ${age}`)
    }else{
        console.log(`Not Eligible for voting ${age}`)
    }
}
eligible(18)



//Task 3: Write a program to find the largest of three numbers using nested if-else statements.
function largestNum(a,b,c){
    let value;
    if(a>=b && a>=c){
        value = a
    }else if(b>=c){
        value = b
    }else
    value = c
    console.log(`largest number = ${value}`)
}
largestNum(2,6,4)




//Task 4: Write a program that uses a switch case to determine the day of the week based on a number (1-7) and log the day name to the console.
function daysInWeek(number){
    let day;
    switch(number){
        case 1:
        day = "Sunday"
        break;
        
        case 2:
        day = "Monday"
        break;
        
        case 3:
        day = "Tuesday"
        break;
        
        case 4:
        day = "Wednesday"
        break;
        
        case 5:
        day = "Thursday"
        break;
        
        case 6:
        day = "Friday"
        break;
        
        case 7:
        day = "Saturday"
        break;
        
        default:
        day = "Invalid day"
        break;
    }
    console.log(`Current day = ${day}`)
}
daysInWeek(1)




//Task 5: Write a program that uses a switch case to assign a grade ('A', 'B', 'C', 'D', 'F') based on a score and log the grade to the console.
function score(marks){
    let grade;
    switch(true){
        case ( marks > 90 ) : 
        grade = "A"
        break;
        
        case (marks >= 75 && marks <=90 ) : 
        grade = "B"
        break;
        
        case (marks >=50  && marks <75 ) : 
        grade = "C"
        break;
        
        case ( marks >=21 && marks < 50 ) : 
        grade = "D"
        break;
        
        default : 
        grade = "F"
        break;
    }
    console.log(`Grade = ${grade}`)
}
score(90)




//Task 6: Write a program that uses the ternary operator to check if a number is even or odd and log the result to the console.

function evenOdd(num){
    (num%2 == 0 || num%4 == 0) 
    ? console.log(`num is even ${num}`)
    :  console.log(`num is odd ${num}`)
}
evenOdd(6)




//Task 7: Write a program to check if a year is a leap year using multiple conditions (divisible by 4, but not 100 unless also divisible by 400) and log the result to the console.
function leapYear(year){
    if(year % 4 === 0){
        if(year % 100 === 0){
            if(year % 400 === 0){
                console.log(`Leap Year ${year}`)
            }else
                console.log(`Not Leap Year ${year}`)
        }else 
            console.log(`Leap Year ${year}`)
    }else
        console.log(`Not Leap Year ${year}`)
}
leapYear(2020)
leapYear(2021)
leapYear(2022)
leapYear(2023)
leapYear(2024)