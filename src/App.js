import './App.scss';
import Login from './components/login';
import ViewDefect from './components/viewDefect';
import AddDefect from './components/addDefect';
import { useState } from "react";
let defectDetails = [
  {
    category: "UI",
    description: "Submit button coming to the extreme left.",
    priority: 2,
    status: "open",
    option: "Change Status",
  },
  {
    category: "Functional",
    description:
      "While submitting the form data, a confirmation popup should appear.",
    priority: 1,
    status: "open",
    option: "Change Status",
  },
  {
    category: "Change Request",
    description: "Add remove user functionality",
    priority: 3,
    status: "closed",
    option: "No action pending",
  },
];

function App() {
  const [isUserAuth, setIsUserAuth] = useState(false);
  const [isDefectView, setIsDefectView] = useState(true);
  const [errorMsg, setErrorMsg] = useState(false);

  function isLoginValid(param) {
    if (param) {
      setIsUserAuth(param);
      setErrorMsg(false);
    } else {
      setErrorMsg(true);
    }
  }

  function logOut() {
    setIsUserAuth(false);
    setIsDefectView(true);
  }

  function viewDefect() {
    setIsDefectView(true);
  }

  function addDefect() {
    setIsDefectView(false);
  }

  function updateDefectList(param) {
    defectDetails = [...defectDetails, param];
    console.log(defectDetails);
    alert("success");
    viewDefect();
  }

  return (
    <>
      {!isUserAuth && <Login isLoginValid={isLoginValid} errorMsg={errorMsg}></Login>}
      {(isUserAuth && isDefectView) && <ViewDefect logOut={logOut} addDefect={addDefect} defectDetails={defectDetails}></ViewDefect>}
      {(isUserAuth && !isDefectView) && <AddDefect logOut={logOut} updateDefectList={updateDefectList}></AddDefect>}
    </>
  );
}

export default App;
