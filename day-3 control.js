//! Activities 1:If else statements
//?  1. Write a program to check whether a number is positive or negative, or zeo 

//* Task 1
let a = 89;
if (a > 0) {
    console.log(a, "is a Positive Number.");
}
else if (a === 0) {
    console.log("This is zero");
}
else {
    console.log(a, "is a negative number");
}

//* Task 2
let person = 39;
if (person >= 18) {
    console.log("You are eligible to vote");
}
else {
    console.log("You are not eligible to vote");
}

//! Activities 2: Nested if else statements

//* Task 3
let l1 = 5;
let l2 = 8;
let l3 = 50;
if (l1 > l2 && l1 > l3) {
    console.log(l1, "is the largest number");
}
else if (l2 > l1 && l2 > l3) {
    console.log(l2, "is the largest number");
}
else {
    console.log(l3, "is the largest number");
}

//! Activity 3: swirch case
//* Task 4
let day = 1;
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day");
        break;
}

//* Task 5
//? write a program that uses switch case to assign  a grade to a student based on his/her marks
function assignGrade(marks) {
    let grade;

    switch (true) {
        case (marks >= 90 && marks <= 100):
            grade = 'A';
            break;
        case (marks >= 80 && marks < 90):
            grade = 'B';
            break;
        case (marks >= 70 && marks < 80):
            grade = 'C';
            break;
        case (marks >= 60 && marks < 70):
            grade = 'D';
            break;
        case (marks >= 0 && marks < 60):
            grade = 'F';
            break;
        default:
            grade = 'Invalid marks';
    }

    return grade;
}


const studentMarks = 95;
const studentGrade = assignGrade(studentMarks);
console.log(`The grade for marks ${studentMarks} is ${studentGrade}.`);

//! Activity 4: conditonal opeartor
//? Task 6
let i = 19;
if (i % 2 == 0) {
    console.log(i, "is a even number");
}
else {
    console.log(i, "is a odd number");
}

//! Activity 5: combining conditons
//? Task 7 write a programe to check if a year is a leap year using mulyiple  conditions
function isLeapYear(year) {
    if (year % 4 === 0) {
        if (year % 100 === 0) {
            if (year % 400 === 0) {
                return true;
            } else {
                return false;
            }
        } else {
            return true;
        }
    } else {
        return false;
    }
    console.log(isLeapYear(2020));
    console.log(isLeapYear(2021));
    console.log(isLeapYear(2022));
    console.log(isLeapYear(2023));
    }
    //! day ended






