let calculateButton = document.getElementById("calculateButton");

calculateButton.addEventListener("click", calculateMarks);

function calculateMarks() {

    let mark1Input = document.getElementById("mark1").value;
    let mark2Input = document.getElementById("mark2").value;
    let mark3Input = document.getElementById("mark3").value;

    let result = document.getElementById("result");

    if (mark1Input === "" || mark2Input === "" || mark3Input === "") {

        result.textContent = "Please enter marks for all subjects.";

        return;
    }

    let mark1 = Number(mark1Input);
    let mark2 = Number(mark2Input);
    let mark3 = Number(mark3Input);

    if (mark1 < 0 || mark1 > 100 ||
        mark2 < 0 || mark2 > 100 ||
        mark3 < 0 || mark3 > 100) {

        result.textContent = "Please enter marks between 0 and 100.";

        return;
    }

    let total = mark1 + mark2 + mark3;

    let percentage = total / 3;

    result.innerHTML = "Total Marks = " + total + "<br>Percentage = " + percentage + "%";
}