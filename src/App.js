import { useState } from "react";
import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import Alert from "./components/Alert";
import TextForm from "./components/TextForm";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light"); //whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  //to show alert
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    //kuch sec mein alert hat jaye
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  //to toggle between light dark
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been enabled", "success");
      // document.title = "TextUtils - Dark Mode"; //to change the title of document

      /* ye taki baar baar show krte rhe kuch */
      // setInterval(() => {
      //   document.title = "TextUtils is amazing";
      // }, 2000);
      // setInterval(() => {
      //   document.title = "Install TextUtils Now";
      // }, 1500);
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
      // document.title = "TextUtils - Light Mode"; //to change the title of document
    }
  };
  return (
    <>
      {/* <Router> */}
      {/* <Navbar title="TextUtils" aboutText="About TextUtils" /> */}
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />

      <Alert alert={alert} />

      <div className="container my-3">
        {/* <Routes>
            <Route exact path="/about" element={<About />}></Route>
            <Route
              exact
              path="/" */}
        {/* // element={ */}
        <TextForm
          showAlert={showAlert}
          heading="Enter the text to analyze below"
          mode={mode}
        />
        {/* } */}
        {/* ></Route> */}
        {/* </Routes> */}
      </div>
      {/* </Router> */}
    </>
  );
}

export default App;
