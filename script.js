let subjects = [];

const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday"
];

const periods = [
    "P1<br>9:00 - 10:00",
    "P2<br>10:00 - 11:00",
    "P3<br>11:15 - 12:15",
    "P4<br>12:15 - 1:15",
    "P5<br>2:00 - 3:00",
    "P6<br>3:00 - 4:00",
    "P7<br>4:00 - 5:00",
    "P8<br>5:00 - 6:00"
];


function addSubject() {

    let subjectInput = document.getElementById("subjectInput");
    let periodInput = document.getElementById("periodInput");

    let subject = subjectInput.value.trim();
    let periodCount = Number(periodInput.value);

    if (subject == "" || periodCount <= 0) {
        showMessage("Please enter a subject and number of periods.");
        return;
    }

    if (periodCount > 40) {
        showMessage("Periods cannot be more than 40.");
        return;
    }

    subjects.push({
        name: subject,
        periods: periodCount
    });

    subjectInput.value = "";
    periodInput.value = "";

    showMessage("");
    displaySubjects();
}


function displaySubjects() {

    let subjectList = document.getElementById("subjectList");

    subjectList.innerHTML = "";

    for (let i = 0; i < subjects.length; i++) {

        subjectList.innerHTML +=
            '<span class="subject">' +
            subjects[i].name +
            ' - ' +
            subjects[i].periods +
            ' periods ' +
            '<button onclick="removeSubject(' + i + ')">X</button>' +
            '</span>';
    }
}


function removeSubject(index) {

    subjects.splice(index, 1);

    displaySubjects();
}


function generateTimetable() {

    if (subjects.length == 0) {
        showMessage("Please add subjects first.");
        return;
    }

    let totalPeriods = 0;

    for (let i = 0; i < subjects.length; i++) {
        totalPeriods += subjects[i].periods;
    }

    if (totalPeriods != 40) {
        showMessage(
            "Total required periods must be 40. Current total: " +
            totalPeriods
        );
        return;
    }

    showMessage("");

    let timetable = [];

    for (let i = 0; i < days.length; i++) {
        timetable[i] = [];
    }

    let daySubjects = [];

    for (let i = 0; i < days.length; i++) {
        daySubjects[i] = [];
    }


    for (let i = 0; i < subjects.length; i++) {

        let subject = subjects[i];

        for (let j = 0; j < subject.periods; j++) {

            let availableDays = [];

            for (let d = 0; d < days.length; d++) {

                if (!daySubjects[d].includes(subject.name)) {
                    availableDays.push(d);
                }
            }

            if (availableDays.length == 0) {

                for (let d = 0; d < days.length; d++) {
                    availableDays.push(d);
                }
            }

            let selectedDay =
                availableDays[
                    Math.floor(Math.random() * availableDays.length)
                ];

            timetable[selectedDay].push(subject.name);
            daySubjects[selectedDay].push(subject.name);
        }
    }


    for (let d = 0; d < days.length; d++) {

        while (timetable[d].length < periods.length) {
            timetable[d].push("Free");
        }

        timetable[d].sort(() => Math.random() - 0.5);
    }


    displayTimetable(timetable);
}


function displayTimetable(timetable) {

    let output = "<table>";

    output += "<tr>";
    output += "<th>Day</th>";

    for (let i = 0; i < periods.length; i++) {
        output += "<th>" + periods[i] + "</th>";
    }

    output += "</tr>";


    for (let d = 0; d < days.length; d++) {

        output += "<tr>";

        output += "<th>" + days[d] + "</th>";

        for (let p = 0; p < periods.length; p++) {

            output += "<td>" + timetable[d][p] + "</td>";
        }

        output += "</tr>";
    }

    output += "</table>";

    document.getElementById("timetable").innerHTML = output;
}


function clearAll() {

    subjects = [];

    document.getElementById("subjectInput").value = "";
    document.getElementById("periodInput").value = "";

    document.getElementById("subjectList").innerHTML = "";

    document.getElementById("timetable").innerHTML =
        '<p class="empty">Add subjects and generate your timetable.</p>';

    showMessage("");
}


function showMessage(message) {

    document.getElementById("message").innerHTML = message;
}