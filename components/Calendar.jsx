import React, { useState } from "react";

function Calendar() {
  // Get the current date
  const currentDate = new Date();

  // State to keep track of the current month and year
  const [month, setMonth] = useState(currentDate.getMonth());
  const [year, setYear] = useState(currentDate.getFullYear());

  // Function to move to the previous month
  function previousMonth() {
    setMonth(month === 0 ? 11 : month - 1);
    if (month === 0) {
      setYear(year - 1);
    }
  }

  // Function to move to the next month
  function nextMonth() {
    setMonth(month === 11 ? 0 : month + 1);
    if (month === 11) {
      setYear(year + 1);
    }
  }

  // Get the number of days in the current month
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  // Get the day of the week that the current month starts on (0 = Sunday, 1 = Monday, etc.)
  const startingDayOfMonth = new Date(year, month, 1).getDay();

  // Create an array of the days in the current month
  const days = [];
  for (let i = 1; i <= daysInMonth; i++) {
    days.push(i);
  }

  // Create the table rows for the calendar
  const rows = [];
  let cells = [];

  // Add empty cells for the days of the week that come before the first day of the current month
  for (let i = 0; i < startingDayOfMonth; i++) {
    cells.push(<td key={i}></td>);
  }

  // Add cells for each day of the current month
  for (let day of days) {
    let className = "";
    if (
      day === currentDate.getDate() &&
      month === currentDate.getMonth() &&
      year === currentDate.getFullYear()
    ) {
      className = "highlighted";
    }
    cells.push(
      <td key={day} className={className}>
        {day}
      </td>
    );

    // If the current cell is the last in the row, add the row to the array of rows and reset the array of cells
    if (cells.length === 7) {
      rows.push(<tr key={day}>{cells}</tr>);
      cells = [];
    }
  }

  // Add empty cells for the days of the week that come after the last day of the current month
  while (cells.length > 0 && cells.length < 7) {
    cells.push(<td key={cells.length}></td>);
  }

  // Add the remaining cells to the last row of the calendar
  if (cells.length > 0) {
    rows.push(<tr key={rows.length}>{cells}</tr>);
  }

  return (
    <div className="calendar">
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <button onClick={previousMonth}>Previous</button>
        <h1>
          {new Date(year, month, 1).toLocaleString("default", {
            month: "long",
          })}{" "}
          {year}
        </h1>
        <button onClick={nextMonth}>Next</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Sun</th>
            <th>Mon</th>
            <th>Tue</th>
            <th>Wed</th>
            <th>Thu</th>
            <th>Fri</th>
            <th>Sat</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>

      <style jsx>{`
        h1 {
          flex: 5;
          text-align: center;
        }

        button {
          flex: 1;
        }

        table {
          border-collapse: collapse;
          width: 100%;
        }

        th,
        td {
          border: 1px solid black;
          padding: 0.5em;
          text-align: center;
          vertical-align: middle;
        }
      `}</style>
    </div>
  );
}

export default Calendar;
