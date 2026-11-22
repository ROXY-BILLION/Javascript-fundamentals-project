const studentName = "Divine";
const examinationScore = null;
const passedStatus = "passed";
const failedStatus = "failed";


if (examinationScore === "" || examinationScore === null || Number.isNaN(examinationScore)) {
    console.log("Please input a valid examination score.");
} else if (examinationScore > 100 || examinationScore < 0) {
    console.log("Invalid score. Score must be between 0 and 100.");
} else if (examinationScore >= 70) {
    console.log(`
        Student Name: ${studentName}
        Examination Score: ${examinationScore}
        Grade: A
        Status: ${passedStatus}
    `);
} else if (examinationScore >= 60) {
    console.log(`
        Student Name: ${studentName}
        Examination Score: ${examinationScore}
        Grade: B
        Status: ${passedStatus}
    `);
} else if (examinationScore >= 50) {
    console.log(`
        Student Name: ${studentName}
        Examination Score: ${examinationScore}
        Grade: C
        Status: ${passedStatus}
    `);
} else if (examinationScore >= 45) {
    console.log(`
        Student Name: ${studentName}
        Examination Score: ${examinationScore}
        Grade: D
        Status: ${passedStatus}
    `);
} else if (examinationScore >= 40) {
    console.log(`
        Student Name: ${studentName}
        Examination Score: ${examinationScore}
        Grade: E
        Status: ${passedStatus}
    `);
} else {
    console.log(`
        Student Name: ${studentName}
        Examination Score: ${examinationScore}
        Grade: F
        Status: ${failedStatus}
    `);
}