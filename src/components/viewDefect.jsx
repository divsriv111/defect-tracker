export default function ViewDefect({ logOut, addDefect, defectDetails }) {
  return (
    <div className="container">
      <div>
        <h2>Defect Tracker</h2>
      </div>
      <div>
        <a onClick={logOut}>Logout</a>
        <br></br>
        <a href="#" onClick={addDefect}>
          Add Defect
        </a>{" "}
        <a href="#"> View Defects</a>
      </div>
      <div className="container">
        <h3>Filter Details</h3>
        <div>
          <label>Priority</label>{" "}
          <select name="priority" id="priority">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
        </div>
        <div>
          <label>Category</label>{" "}
          <select name="category" id="category">
            <option value="bug">bug</option>
            <option value="defect">defect</option>
            <option value="not a defect">not a defect</option>
            <option value="UI">UI</option>
            <option value="Functional">Functional</option>
            <option value="Change Request">Change Request</option>
          </select>
        </div>
      </div>
      <div>
        <h3>Defect Details</h3>
        <p style={{ color: "red" }}>Search Result: {defectDetails.length}</p>
        <table>
          <thead>
            <tr>
              <th>Defect Category</th>
              <th>Description</th>
              <th>Priority</th>
              <th>Status</th>
              <th>Change Status</th>
            </tr>
          </thead>
          <tbody>
            {defectDetails.map((detail, index) => {
              return (
                <tr key={index}>
                  <td>{detail.category}</td>
                  <td>{detail.description}</td>
                  <td>{detail.priority}</td>
                  <td>{detail.status}</td>
                  <td>{detail.option}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
