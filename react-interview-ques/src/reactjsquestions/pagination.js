import { useState, useEffect } from "react";
import users from "./data/users";

export default function DataTable() {
  const data = Array.from({ length: 50 }, (_, i) => `Item ${i + 1}`);
  const [page, setPage] = useState(1);
  const itemsPerPage = 5;
  const totalPages = Math.ceil(data.length / itemsPerPage);
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const dataToDisplay = [...data].slice(startIndex, endIndex);
  // const [page, setCurrensetPage] =
  return (
    <div>
      <h2>Pagination Example</h2>

      {/* Show items */}
      <ul>
        {dataToDisplay.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      {/* Pagination buttons */}
      <div style={{ marginTop: "20px" }}>
        <button onClick={() => setPage(page - 1)} disabled={page === 1}>
          Prev
        </button>

        <span style={{ margin: "0 10px" }}>
          Page {page} of {totalPages}
        </span>

        <button
          onClick={() => setPage(page + 1)}
          disabled={page === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
}
