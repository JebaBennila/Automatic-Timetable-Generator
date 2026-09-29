# Automatic Timetable Generator

A simple web-based Automatic Timetable Generator that creates a weekly college timetable based on the number of periods required for each subject.

## Features

- Add subjects with the required number of periods per week
- 5 working days from Monday to Friday
- 8 periods per day
- 40 total periods per week
- Validate the total number of required periods
- Automatically generate a weekly timetable
- Remove subjects before generating
- Clear all entered data
- Simple and responsive user interface

## Technologies Used

- HTML
- CSS
- JavaScript

## Project Structure

```text
Automatic-Timetable-Generator/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

---

## How to Run

Follow these simple steps to get the project running locally on your machine:

1. **Clone the repository** (or download the ZIP file):
   ```bash
   git clone https://github.com
   ```
2. **Open the project folder**:
   ```bash
   cd Automatic-Timetable-Generator
   ```
3. **Launch the application**:
   * Open the `index.html` file directly in any modern web browser (Chrome, Firefox, Edge, Safari).

4. **Generate your schedule**:
   * Enter your subjects and their required periods per week.
   * **Note:** Ensure the total number of periods across all subjects adds up to exactly **40**.
   * Click the **Generate Timetable** button.

---

## Timetable Structure

The application generates a standard weekly academic schedule based on the following parameters:
* **5** working days (Monday to Friday)
* **8** periods per day
* **40** total periods per week

### Example Configuration

| Subject | Periods / Week |
| :--- | :---: |
| Python | 6 |
| DBMS | 6 |
| Artificial Intelligence | 6 |
| Mathematics | 6 |
| English | 4 |
| Tamil | 4 |
| Data Science | 4 |
| Computer Networks | 4 |
| **Total** | **40** |

---

## Purpose

This project was developed as a hands-on learning tool to understand and practice core web development concepts, including:
* Structuring content with **HTML**
* Styling interfaces with **CSS**
* Implementing dynamic functionality using **JavaScript**
* Working with core JS concepts like **arrays, functions, and validation**
* Applying basic **scheduling logic** to distribute items programmatically

---

## Future Improvements

Planned features for future iterations of this project include:
* Adding faculty availability and scheduling constraints
* Implementing classroom and lab allocation logic
* Storing generated timetables persistently using a backend database
