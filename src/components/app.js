import React, { Component } from "react";

import quickSelectImg from "../quick-select.png";

import "./app.css";

class App extends Component {
  render() {
    return (
      <div>
        <h2>QuickSelect (React)</h2>
        <p>
          Implement a <code>QuickSelect</code> React component that accepts an
          array of data objects and displays it as a table. Use{" "}
          <code>generateSampleData</code> from <code>src/services/data</code>{" "}
          for sample data.
        </p>
        <p>
          <code>QuickSelect</code> should also render groups of checkboxes for
          each value present for each key in the sample data. Rows matching any
          of the checked boxes should be highlighted.
        </p>
        <p>
          <code>QuickSelect</code> should only generate these checkbox groups
          for keys that are passed in (as an array). For example, 
          <code>['category', 'color']</code>.
        </p>
        <p>Here is an example image:</p>
        <img src={quickSelectImg} alt="screenshot of sample solution" />
      </div>
    );
  }
}

export default App;
