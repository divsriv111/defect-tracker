import { useState } from "react";

export default function AddDefect({ logOut, viewDefect, updateDefectList }) {
  const [state, setState] = useState({
    category: "",
    description: "",
    priority: 3,
    status: "open",
    option: "Close Defect",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((currentState) => ({ ...currentState, [name]: value }));
  };

  function addDefectList() {
    updateDefectList(state);
  }

  return (
    <div className="container">
      <div>
        <h2>Defect Tracker</h2>
      </div>
      <div>
        <a onClick={logOut}>Logout</a>
        <br></br>
        <a href="#">Add Defect</a>{" "}
        <a href="#" onClick={viewDefect}>
          {" "}
          View Defects
        </a>
      </div>
      <div>
        <table>
          <thead>
            <tr>
              <th colSpan={2}>Add Details</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <label>Defect Category</label>
                <select
                  name="category"
                  value={state.category}
                  onChange={handleChange}
                >
                  <option value="bug">bug</option>
                  <option value="defect">defect</option>
                  <option value="not a defect">not a defect</option>
                  <option value="UI">UI</option>
                  <option value="Functional">Functional</option>
                  <option value="Change Request">Change Request</option>
                </select>
              </td>
            </tr>
            <tr>
              <td>
                <label>Description</label>
                <textarea
                  name="description"
                  value={state.description}
                  onChange={handleChange}
                ></textarea>
              </td>
            </tr>
            <tr>
              <td>
                <label>Priority</label>
                <select
                  name="priority"
                  id="priority"
                  value={state.priority}
                  onChange={handleChange}
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
              </td>
            </tr>
            <tr>
              <td colSpan="2">
                <button onClick={addDefectList}>Add defect</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
