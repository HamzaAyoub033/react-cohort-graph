import React, { useState } from "react";
import "./styles.css";
import CohortGraph from "react-cohort-graph";

export default function App() {
  const [s, setS] = useState(0);
  return (
    <div className="App">
      <h1>Cohort Analysis</h1>
      
      <CohortGraph
      className="cohort-graph" // Apply your custom CSS class
        data={{
          months: {
            "Jun": [7067, 89],
            "May": [8710, 206, 38],
            "Apr": [11593, 247, 87, 39],
            "Mar": [11497, 340, 111, 66, 20],
            "Feb": [11132, 334, 154, 78, 65, 13],
            "Jan": [11567, 300, 135, 116, 90, 48, 22]
          }
        }}
        defaultValueType={["value"]}
      />
    </div>
  );
}
