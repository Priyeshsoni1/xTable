import React, { useEffect, useState } from "react";

export const Table = () => {
  const dataOriginal = [
    { date: "2022-09-01", views: 100, article: "Article 1" },
    { date: "2023-09-01", views: 100, article: "Article 1" },
    { date: "2023-09-02", views: 150, article: "Article 2" },
    { date: "2023-09-02", views: 120, article: "Article 3" },
    { date: "2020-09-03", views: 200, article: "Article 4" },
  ];

  const [data, setData] = useState([...dataOriginal]);

  const handleSort = (type) => {
    let sorted = [...data];
    if (type === 1) {
      sorted.sort((a, b) => new Date(b.date) - new Date(a.date));
    }
    if (type === 2) {
      sorted.sort((a, b) => b.views - a.views);
    }
    setData(sorted);
  };
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Date and Views Table</h1>
      <div style={{ textAlign: "center", marginBottom: "10px" }}>
        <button type="button" onClick={() => handleSort(1)}>
          Sort by Date
        </button>
        <button type="button" onClick={() => handleSort(2)}>
          Sort by Views
        </button>
      </div>

      <div style={{ display: "flex", justifyContent: "center" }}>
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Views</th>
              <th>Article</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td>{item.date}</td>
                <td>{item.views}</td>
                <td>{item.article}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
