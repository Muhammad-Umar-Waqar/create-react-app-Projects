// import logo from "./logo.svg";
import "./App.css"
import About from "./components/About";
import Navbar from "./components/Navbar";
import React, {useState} from 'react';
import Alert from "./components/Alert";
import TextForm from "./components/TextForm"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


function App() {
  const [mode, setMode ] = useState('light'); //Whether Dark Mode is enabled or not 
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg : message,
      type : type
    })

    setTimeout(() => {
      setAlert(null)
    }, 2000);

  }

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = "#042743"
      showAlert("Dark mode has been Enabled", "success")
      let changeee = document.getElementById("changeee");
      changeee.textContent= "Enable Light Mode"
      // document.title = "TextUtils - Dark Mode"
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been Enabled", "success")
      let changeee = document.getElementById("changeee");
      changeee.textContent= "Enable Dark Mode";
      // document.title = "TextUtils - Light Mode"
    }
    
  }
  


  return (
    <>
    <Router>
<Navbar title="TextUtils" aboutText = "About Us" mode={mode} toggleMode={toggleMode}/>
<Alert alert={alert}/>
<div className="container">
<Routes>
  <Route exact path="/about" element={<About  mode={mode}/>} />     
  <Route path="/" element={<TextForm showAlert={showAlert} mode={mode} heading="Word Counter, Character Counter, Remove Extra Spaces" />} />
</Routes>
{/* <TextForm showAlert={s7howAlert} mode={mode} heading="Enter Your Text" /> */}
</div>
</Router>
{/* <About></About> */}
  </>
  );
}

export default App;


