// import logo from './logo.svg';
import './App.css';
import { Navbar } from './components/Navbar';
import { About } from "./components/About";
import { TextForm } from "./components/TextForm";
import React, { useState } from 'react';
import Alert from './components/Alert';

function App() {

  const [mode, setMode] = useState('light');

  const [alert, setAlert] = useState(null);

  const showAlert = (message,type)=>{
    setAlert({
      msg : message,
      type : type 
    })
    setTimeout(() => {
        setAlert(null);
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === 'dark') {
      setMode("light");
      document.body.style.backgroundColor = 'white';
      showAlert('Light Mode has been enabled','success');
      document.title = 'Light Mode';
    }
    else {
      setMode("dark");
      document.body.style.backgroundColor = '#0F3460'
      showAlert('Dark Mode has been enabled','success');
      document.title = 'Dark Mode';
      // setInterval(() => {
      //   document.title = 'TextUtils is amazing';
      // }, 2000);
      // setInterval(() => {
      //   document.title = 'Install TextUtils Now!!';
      // }, 1500);
    }
  }

  
  return (
    <>
      <Navbar title="Text Utils App" about="Hello" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} style=" height : '50px'"></Alert>
      <div className="container my-3">
        {/* <Navbar/> */}
        {/* <About mode="mode"/> */}
        <TextForm heading="Enter a Text to Analyze" mode={mode} showAlert={showAlert}></TextForm>
      </div>
    </>


  )
}

export default App;
