import { useState } from "react";

export default function Login({ isLoginValid, errorMsg }) {
  const [state, setState] = useState({
    username: "",
    password: "",
  });

  function isValid() {
    isLoginValid(state.username === "admin" && state.password === "admin");
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((currentState) => ({ ...currentState, [name]: value }));
  };

  return (
    <div>
      <div className="container">
        <h2>Defect Tracker</h2>
        <table>
          <thead>
            <tr>
              <th colSpan="2">Login</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Username</td>
              <td>
                <input
                  name="username"
                  value={state.username}
                  onChange={handleChange}
                  placeholder="Enter Username"
                  type="text"
                ></input>
              </td>
            </tr>
            <tr>
              <td>Passowrd</td>
              <td>
                <input
                  name="password"
                  value={state.password}
                  onChange={handleChange}
                  placeholder="Password"
                  type="password"
                ></input>
              </td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td colSpan="2">
                <button onClick={isValid}>Sign In</button>
              </td>
            </tr>
          </tfoot>
        </table>
        <div>
          {errorMsg && (
            <h4 style={{ color: "red" }}>
              <i>Invalid credentials!!</i>
            </h4>
          )}
        </div>
      </div>
    </div>
  );
}
