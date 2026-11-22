const studentName = "Divine";
const studentAge = 25;
const examinationScore = 80;

let grade = "";
let examstatus = "";

const passedStatus = "Passed";
const failedStatus = "Failed";

// PART 1: Calculate student performance
if (examinationScore < 0 || examinationScore > 100) {
    console.log("Invalid examination score.");
} else {
    if (examinationScore >= 70) {
        grade = "A";
        examstatus = passedStatus;
    } else if (examinationScore >= 60) {
        grade = "B";
        examstatus = passedStatus;
    } else if (examinationScore >= 50) {
        grade = "C";
        examstatus = passedStatus;
    } else if (examinationScore >= 45) {
        grade = "D";
        examstatus = passedStatus;
    } else if (examinationScore >= 40) {
        grade = "E";
        examstatus = passedStatus;
    } else {
        grade = "F";
        examstatus = failedStatus;
    }

    console.log("===== STUDENT REPORT =====");
    console.log(`Name: ${studentName}`);
    console.log(`Age: ${studentAge}`);
    console.log(`Score: ${examinationScore}`);
    console.log(`Grade: ${grade}`);
    console.log(`Status: ${examstatus}`);
}

// PART 2: Analyse numbers from 1 to 10
let total = 0;
let evenCount = 0;
let oddCount = 0;
let largestNumber = 1;
let smallestNumber = 1;

for (let number = 1; number <= 10; number++) {

    total = total + number;

    if (number % 2 === 0) {
        evenCount++;
    } else {
        oddCount++;
    }

    if (number > largestNumber) {
        largestNumber = number;
    }

    if (number < smallestNumber) {
        smallestNumber = number;
    }

    console.log(`Number: ${number}`);
}

// PART 3: Calculate and display statistics
const average = total / 10;

console.log("===== NUMBER ANALYSIS =====");
console.log(`Total: ${total}`);
console.log(`Even numbers: ${evenCount}`);
console.log(`Odd numbers: ${oddCount}`);
console.log(`Largest number: ${largestNumber}`);
console.log(`Smallest number: ${smallestNumber}`);
console.log(`Average: ${average}`);
