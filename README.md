# Assignment 03 — JavaScript
### Web Technology Lab — B.Tech 5th Semester

This repository contains the complete implementation of **Assignment 03** for the Web Technology Lab. The assignment focuses on JavaScript, DOM manipulation, external JavaScript files, `document.write()`, conversion of a Core Java program to JavaScript, GitHub deployment, and an interactive Grade/SGPA Calculator.

---

## 📌 Assignment Overview

The assignment consists of the following tasks:

1. **Faculty Information Profile**
2. **HTML page generated using `document.write()`**
3. **Conversion of a Core Java project into JavaScript and deployment through GitHub**
4. **Bonus: Student Grade & SGPA Calculator**

The projects are implemented using **HTML, CSS, and JavaScript**, with the original Core Java program retained for comparison in Question 3.

---

# 📁 Repository Structure

The repository is organized as follows:

```text
Assignment03/
│
├── CST_faculty.html
├── CST_faculty.css
├── CST_faculty.js
│
├── student_info.html
├── student_info.js
│
├── java_project.java
├── project.html
├── project.js
│
├── student_CGPA.html
├── student_CGPA.css
├── student_CGPA.js
│
└── README.md
```

### File mapping

| Files | Purpose |
|---|---|
| `CST_faculty.html` | Faculty profile webpage |
| `CST_faculty.css` | Styling for faculty profile |
| `CST_faculty.js` | Faculty data, search and dynamic profile display |
| `student_info.html` | HTML structure for the `document.write()` task |
| `student_info.js` | Generates the portfolio page using `document.write()` |
| `java_project.java` | Original Core Java program |
| `project.html` | HTML interface for the converted JavaScript project |
| `project.js` | JavaScript version of the Core Java project |
| `student_CGPA.html` | SGPA calculator webpage |
| `student_CGPA.css` | Styling for SGPA calculator |
| `student_CGPA.js` | SGPA calculation, validation and dynamic result |

---

# 1️⃣ Faculty Information Profile

## Objective

Create an information profile for faculty members of the CST Department of IIEST Shibpur.

The user enters a faculty member's name, and the corresponding profile is displayed in the webpage.

The profile contains:

- Faculty name
- Photograph
- Email
- Highest qualification
- Subjects being taught
- Research areas

---

## Implementation Workflow

### Step 1 — Store faculty information

Faculty information is stored as an **array of JavaScript objects**.

Each faculty object contains properties such as:

```javascript
{
    name: "Faculty Name",
    photo: "",
    email: "faculty@example.com",
    qualification: "Highest Qualification",
    subjects: [],
    research: [
        "Research Area 1",
        "Research Area 2"
    ]
}
```

Using an array of objects makes it possible to store information for multiple faculty members in a structured way.

---

### Step 2 — Take faculty name as input

The HTML page contains an input field:

```html
<input type="text" id="facultyInput">
```

A Search button is provided to start the search.

---

### Step 3 — Search the faculty array

When the Search button is clicked, JavaScript reads the entered name and searches the faculty array using `find()`.

The comparison is made case-insensitive:

```javascript
let faculty = facultyList.find(
    f => f.name.toLowerCase() === inputName.trim().toLowerCase()
);
```

`trim()` removes unnecessary spaces from the beginning and end of the input.

`toLowerCase()` allows inputs such as:

```text
Abhik Mukherjee
abhik mukherjee
ABHIK MUKHERJEE
```

to be treated as the same search.

---

### Step 4 — Display the profile

If a matching faculty member is found:

```javascript
profile.style.display = "block";
```

The corresponding information is inserted into the HTML elements using:

```javascript
textContent
```

The faculty photograph is assigned dynamically through:

```javascript
facultyPhoto.src = faculty.photo;
```

---

### Step 5 — Display subjects and research areas

The subjects and research areas are arrays.

JavaScript creates `<li>` elements dynamically:

```javascript
let item = document.createElement("li");
item.textContent = faculty.research[i];
researchList.appendChild(item);
```

This allows the webpage to generate the lists based on the selected faculty member.

---

### Step 6 — Handle invalid searches

If no faculty member is found:

```javascript
profile.style.display = "none";
message.textContent = "Faculty not found";
```

Therefore, the old profile is hidden and an appropriate error message is displayed.

---

# 2️⃣ HTML Page Using `document.write()`

## Objective

Create an entire HTML page using `document.write()` from an **external JavaScript file**.

A Student Portfolio page was created for this task.

---

## Implementation Workflow

### Step 1 — HTML file

The HTML file contains the basic document structure and links the external JavaScript:

```html
<script src="student_info.js"></script>
```

---

### Step 2 — Generate the webpage using JavaScript

The webpage content is generated using:

```javascript
document.write();
```

Different elements such as:

- Headings
- Paragraphs
- Lists
- Portfolio information
- Contact information

are written into the page using JavaScript.

Example:

```javascript
document.write("<h1>My Student Portfolio</h1>");
document.write("<h2>About Me</h2>");
document.write("<p>I am a Computer Science student.</p>");
```

---

### Step 3 — Add print functionality

A print button is generated using:

```javascript
document.write(
    "<button onclick='window.print()'>Print Page</button>"
);
```

When the button is clicked, the browser's print dialog opens.

### Important note

`document.write()` is used here because it is **specifically required by the assignment**. In modern web development, DOM manipulation methods are generally preferred for dynamically modifying a webpage.

---

# 3️⃣ Core Java Project → JavaScript

## Objective

Convert a simple Core Java project into JavaScript and make the converted project runnable through GitHub.

A **Student Marks Calculator** was selected as the Core Java project.

The original Java program calculates:

- Marks of three subjects
- Total marks
- Percentage

---

## Step 1 — Original Core Java program

The original program is stored in:

```text
java_project.java
```

The program uses Java's `Scanner` class to take marks as keyboard input.

Basic flow:

```text
Enter marks
     ↓
Store marks
     ↓
Calculate total
     ↓
Calculate percentage
     ↓
Display result
```

---

## Step 2 — Convert input handling

In Java, input is taken using `Scanner`:

```java
int mark1 = sc.nextInt();
```

In JavaScript, input is taken from HTML input elements:

```javascript
let mark1Input =
    document.getElementById("mark1").value;
```

Since HTML input values are strings, they are converted into numbers:

```javascript
let mark1 = Number(mark1Input);
```

---

## Step 3 — Convert calculations

The calculation logic remains essentially the same.

### Java

```java
int total = mark1 + mark2 + mark3;
double percentage = total / 3.0;
```

### JavaScript

```javascript
let total = mark1 + mark2 + mark3;
let percentage = total / 3;
```

---

## Step 4 — Add input validation

The JavaScript version checks that:

- All fields are filled.
- Marks are not below 0.
- Marks are not above 100.

Invalid input produces an error message and stops further calculation.

```javascript
if (mark1 < 0 || mark1 > 100) {
    // invalid input
}
```

---

## Step 5 — Display the result

Instead of using:

```java
System.out.println();
```

the JavaScript version displays the result directly on the webpage using:

```javascript
result.innerHTML = ...;
```

---

## Step 6 — GitHub deployment

The converted project was uploaded to the GitHub repository.

GitHub Pages was then configured using:

```text
Source: Deploy from a branch
Branch: main
Folder: / (root)
```

The project is accessed through the `project.html` page of the GitHub Pages site.

This demonstrates that the converted JavaScript project can be **run directly from GitHub using a web browser**.

---

# 4️⃣ Bonus — Student Grade & SGPA Calculator

## Objective

Create an interactive Student Grade and SGPA Calculator.

The calculator accepts marks for **five subjects** and generates the final academic result.

It includes:

- Mark input
- Input validation
- Total marks
- Percentage
- Letter grade
- Grade point
- SGPA
- Dynamic result styling

---

## Step 1 — Take marks as input

Five HTML number input fields are created:

```text
Subject 1
Subject 2
Subject 3
Subject 4
Subject 5
```

Each input has a unique ID so JavaScript can access it.

---

## Step 2 — Validate the input

The program first checks whether every subject has a mark.

If a field is empty:

```text
Please enter marks for all subjects.
```

is displayed.

The program then checks whether every mark is within:

```text
0 to 100
```

If an invalid mark is entered:

```text
Please enter marks between 0 and 100.
```

is displayed.

---

## Step 3 — Calculate total and percentage

For five subjects:

```javascript
let total = mark1 + mark2 + mark3 + mark4 + mark5;

let percentage = total / 5;
```

---

## Step 4 — Determine grade and grade point

A reusable function named `getGrade()` determines the letter grade and corresponding grade point.

The grading scale used in this implementation is:

| Percentage | Grade | Grade Point |
|---:|:---:|---:|
| 90–100 | A+ | 10 |
| 80–89 | A | 9 |
| 70–79 | B+ | 8 |
| 60–69 | B | 7 |
| 50–59 | C | 6 |
| 40–49 | D | 5 |
| Below 40 | F | 0 |

The function returns an object containing both values:

```javascript
return {
    grade: grade,
    gradePoint: gradePoint
};
```

This avoids repeating the same grading logic for every subject.

---

## Step 5 — Calculate SGPA

The grade points of all five subjects are added:

```javascript
let totalGradePoints =
    result1.gradePoint +
    result2.gradePoint +
    result3.gradePoint +
    result4.gradePoint +
    result5.gradePoint;
```

Since this implementation assumes equal credits for all five subjects:

```javascript
let sgpa = totalGradePoints / 5;
```

The SGPA is displayed up to two decimal places:

```javascript
sgpa.toFixed(2)
```

---

## Step 6 — Dynamic styling

The result area changes its CSS class according to the SGPA.

For example:

```javascript
if (sgpa >= 5) {
    result.className = "success";
}
else {
    result.className = "fail";
}
```

The CSS classes provide different visual styles for the result.

An additional `error` class is used for invalid input.

---

# 🧠 JavaScript Concepts Used

This assignment demonstrates several important JavaScript concepts:

- Variables using `let`
- Arrays
- Objects
- Arrays of objects
- Functions
- Function parameters
- `return`
- Arrow functions
- `find()`
- `if / else if / else`
- Comparison operators
- Logical operators
- `Number()`
- `.value`
- `.trim()`
- `.toLowerCase()`
- DOM manipulation
- `getElementById()`
- `textContent`
- `innerHTML`
- `style.display`
- `createElement()`
- `appendChild()`
- `addEventListener()`
- Click events
- External JavaScript files
- `document.write()`
- `window.print()`
- Dynamic CSS classes

---

# ▶️ How to Run the Projects Locally

No additional libraries or installations are required.

## Requirements

Only a modern web browser such as:

- Google Chrome
- Microsoft Edge
- Mozilla Firefox

is required.

---

## Run Question 1

Open:

```text
CST_faculty.html
```

in a browser.

Enter a faculty member's name and click **Search**.

---

## Run Question 2

Open:

```text
student_info.html
```

The page will be generated using `student_info.js`.

Use the **Print Page** button to open the browser print dialog.

---

## Run Question 3

Open:

```text
project.html
```

Enter marks for the three subjects and click **Calculate**.

---

## Run Bonus Question 4

Open:

```text
student_CGPA.html
```

Enter marks for all five subjects and click **Calculate Result**.

---

# 🌐 GitHub Pages

The repository is configured with **GitHub Pages**.

### Deployment configuration

```text
Source: Deploy from a branch
Branch: main
Folder: / (root)
```

The Q3 JavaScript project is available through:

```text
https://arpancsb037.github.io/Assignment03/project.html
```

GitHub Pages allows the static HTML, CSS, and JavaScript projects in this repository to be accessed through a web browser without installing them locally.

---

# 🔄 Overall Assignment Workflow

The complete development process followed was:

```text
Assignment Requirements
        ↓
Understand JavaScript Concepts
        ↓
Q1 — Faculty Profile
        ↓
Store Faculty Data
        ↓
Search Using find()
        ↓
Display Profile Dynamically
        ↓
Q2 — document.write()
        ↓
Create Portfolio Page
        ↓
Generate Page Using External JS
        ↓
Add Print Function
        ↓
Q3 — Core Java Conversion
        ↓
Create Simple Core Java Project
        ↓
Understand Java Program Logic
        ↓
Convert Input / Processing / Output to JavaScript
        ↓
Add Validation
        ↓
Upload to GitHub
        ↓
Configure GitHub Pages
        ↓
Run Project Online
        ↓
Q4 — Bonus SGPA Calculator
        ↓
Take 5 Subject Marks
        ↓
Validate Input
        ↓
Calculate Percentage
        ↓
Determine Grade & Grade Point
        ↓
Calculate SGPA
        ↓
Apply Dynamic Styling
        ↓
Complete Assignment
```

---

# 📌 Submission

The repository contains the source code for all implemented questions and the original Core Java program used for Question 3.

The repository can be used both for:

1. **Viewing the source code**
2. **Running the HTML/JavaScript projects locally**
3. **Running the Question 3 converted project through GitHub Pages**

---

## Author

**Arpan Senapati**

B.Tech — Computer Science and Technology

Web Technology Lab — Assignment 03
