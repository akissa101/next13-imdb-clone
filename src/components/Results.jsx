import React from "react";

export default function Results({ results }) {
  return (
    <div>
      {results.map((result) => (
        <h2 key={result.id}>{result.title}</h2>
      ))}
    </div>
  );
}
