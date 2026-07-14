import { useState } from "react";

//useState is a React Hook that lets you add and manage state in a functional component.
//State is data that can change over time. When the state changes, 
// React automatically re-renders the component to display the updated data.

function App() {
  const [issues, setIssues] = useState([]);
  const [issueId, setIssueId] = useState("");

  async function getIssues() {
    const response = await fetch("https://fastapi-poc-04n9.onrender.com/issues");
    console.log("Status:", response.status);
    const data = await response.json();
    console.log("Data:", data);
    setIssues(data);
}
  }

  async function searchIssue() {
    const response = await fetch(
      `https://fastapi-poc-04n9.onrender.com/issues/${issueId}`
    );

    const data = await response.json();
    setIssues([data]);
  }

  return (
    <div style={{ padding: "30px" }}>
      <h2>Jira Issues</h2>

      <button onClick={getIssues}>Get All Issues</button>

      <br />
      <br />

      <input
        placeholder="Enter Issue ID"
        value={issueId}
        onChange={(e) => setIssueId(e.target.value)}
      />

      <button onClick={searchIssue}>Search</button>

      <hr />

      {issues.map((issue, index) => (
        <div key={index}>
          <h3>{issue.id}</h3>
          <p>{issue.title}</p>
          <p>{issue.description}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default App;
