let calculateButton = document.getElementById("calculateButton");

calculateButton.addEventListener("click", calculateResult);

function getGrade(mark) {

    let grade;
    let gradePoint;

    if (mark >= 90) {
        grade = "A+";
        gradePoint = 10;
    }
    else if (mark >= 80) {
        grade = "A";
        gradePoint = 9;
    }
    else if (mark >= 70) {
        grade = "B+";
        gradePoint = 8;
    }
    else if (mark >= 60) {
        grade = "B";
        gradePoint = 7;
    }
    else if (mark >= 50) {
        grade = "C";
        gradePoint = 6;
    }
    else if (mark >= 40) {
        grade = "D";
        gradePoint = 5;
    }
    else {
        grade = "F";
        gradePoint = 0;
    }

    return {
        grade: grade,
        gradePoint: gradePoint
    };
}


function calculateResult() {

    let mark1Input = document.getElementById("mark1").value;
    let mark2Input = document.getElementById("mark2").value;
    let mark3Input = document.getElementById("mark3").value;
    let mark4Input = document.getElementById("mark4").value;
    let mark5Input = document.getElementById("mark5").value;

    let result = document.getElementById("result");

    if (mark1Input === "" ||
        mark2Input === "" ||
        mark3Input === "" ||
        mark4Input === "" ||
        mark5Input === "") {

        result.textContent = "Please enter marks for all subjects.";
        result.className = "error";

        return;
    }

    let mark1 = Number(mark1Input);
    let mark2 = Number(mark2Input);
    let mark3 = Number(mark3Input);
    let mark4 = Number(mark4Input);
    let mark5 = Number(mark5Input);

    if (mark1 < 0 || mark1 > 100 ||
        mark2 < 0 || mark2 > 100 ||
        mark3 < 0 || mark3 > 100 ||
        mark4 < 0 || mark4 > 100 ||
        mark5 < 0 || mark5 > 100) {

        result.textContent = "Please enter marks between 0 and 100.";
        result.className = "error";

        return;
    }

    let total = mark1 + mark2 + mark3 + mark4 + mark5;

    let percentage = total / 5;

    let result1 = getGrade(mark1);
    let result2 = getGrade(mark2);
    let result3 = getGrade(mark3);
    let result4 = getGrade(mark4);
    let result5 = getGrade(mark5);

    let totalGradePoints =
        result1.gradePoint +
        result2.gradePoint +
        result3.gradePoint +
        result4.gradePoint +
        result5.gradePoint;

    let sgpa = totalGradePoints / 5;

    result.innerHTML =
        "<h2>Result</h2>" +
        "<p>Subject 1: " + mark1 + " - Grade: " + result1.grade +
        " - Grade Point: " + result1.gradePoint + "</p>" +

        "<p>Subject 2: " + mark2 + " - Grade: " + result2.grade +
        " - Grade Point: " + result2.gradePoint + "</p>" +

        "<p>Subject 3: " + mark3 + " - Grade: " + result3.grade +
        " - Grade Point: " + result3.gradePoint + "</p>" +

        "<p>Subject 4: " + mark4 + " - Grade: " + result4.grade +
        " - Grade Point: " + result4.gradePoint + "</p>" +

        "<p>Subject 5: " + mark5 + " - Grade: " + result5.grade +
        " - Grade Point: " + result5.gradePoint + "</p>" +

        "<hr>" +

        "<p>Total Marks: " + total + " / 500</p>" +
        "<p>Percentage: " + percentage + "%</p>" +
        "<p>SGPA: " + sgpa.toFixed(2) + "</p>";

    if (sgpa >= 5) {
        result.className = "success";
    }
    else {
        result.className = "fail";
    }
}