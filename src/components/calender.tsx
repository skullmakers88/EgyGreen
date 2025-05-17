import React, { useRef } from "react";

const produceData = [
  { name: "Strawberries", emoji: <span role="img" aria-label="Strawberries">🍓</span>, months: [1, 3, 5, 12] },
  { name: "Grapes", emoji: <span role="img" aria-label="Grapes">🍇</span>, months: [5, 6, 7, 8, 9] },
  {
    name: "Pomegranates",
    emoji: (
      <img
        src="https://imgproxy.attic.sh/insecure/f:png/plain/https://attic.sh/ax9q7gw0hn5n9dk0cl0nxsmaf4le"
        alt="Pomegranate"
        style={{ width: 30, height: 30, display: "block", margin: "0 auto" }}
      />
    ),
    months: [8, 9, 10, 11],
  },
  { name: "Oranges", emoji: <span role="img" aria-label="Oranges">🍊</span>, months: [1, 2, 3, 4, 5, 12] },
  { name: "Barhi Dates", emoji: <span role="img" aria-label="Barhi Dates">🌴</span>, months: [9, 10] },
  { name: "Onions", emoji: <span role="img" aria-label="Onions">🧅</span>, months: [4, 5, 6, 7, 8, 12] },
  { name: "Sweet Potato", emoji: <span role="img" aria-label="Sweet Potato">🍠</span>, months: [1, 10, 11, 12] },
];

const monthNames = [
  "Jan.", "Feb.", "Mar.", "Apr.", "May", "Jun.",
  "Jul.", "Aug.", "Sep.", "Oct.", "Nov.", "Dec."
];

const SeasonCalendar = () => {
  const sectionRef = useRef(null);

  return (
    <section id="calender" className="bg-gray-50" ref={sectionRef}>
      <div style={{ overflowX: "auto", padding: "34px", paddingBottom: "92px" }}>
        <h2 style={{ textAlign: "center", color: "#17406d", marginBottom: "24px" }}>
          Egygreen Fruits and Vegetables Calendar
        </h2>
        <table
          style={{
            borderCollapse: "collapse",
            minWidth: "900px",
            width: "100%",
            background: "#fff",
            fontSize: "1.1rem",
          }}
        >
          <thead>
            <tr>
              <th style={{ border: "1px solid #ddd", padding: "8px", background: "#f7f7f7" }}> </th>
              {monthNames.map((month) => (
                <th
                  key={month}
                  style={{ border: "1px solid #ddd", padding: "8px", background: "#f7f7f7" }}
                >
                  {month}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {produceData.map((item) => (
              <tr key={item.name}>
                <td style={{ border: "1px solid #ddd", padding: "8px", fontWeight: "bold" }}>
                  {item.name}
                </td>
                {monthNames.map((_, idx) => (
                  <td
                    key={idx}
                    style={{
                      border: "1px solid #ddd",
                      padding: "8px",
                      textAlign: "center",
                      fontSize: "1.5rem",
                    }}
                  >
                    {item.months.includes(idx + 1) ? item.emoji : ""}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default SeasonCalendar;
