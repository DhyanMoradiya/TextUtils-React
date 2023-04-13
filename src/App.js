import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';

function App() {

  const [mode, setMode] = useState({
    color:'black',
    bodyBackground : 'white',
    btnBackground : '#212529',
    navBackground : '#f8f9fa',
    btnColor:'white',
    navColor:'light'
  })
const [alert, setAlert] = useState(null);

const changeMode = (textColor, bodyBg, btnBg, navBg,btnColor, navColor)=>{
  setMode({
    color:textColor,
    bodyBackground: bodyBg,
    btnBackground:btnBg,
    navBackground : navBg,
    btnColor:btnColor,
    navColor:navColor
  })
}
 document.body.style.background = mode.bodyBackground;


const showAlert = (message, type)=>{
  setAlert({
    msg : message,
    type : type
  })
  setTimeout(() => {
    setAlert(null);
  }, 2000);
}

  // const toggleMode = () => {
  //   if (mode === 'dark') {
  //     setMode('light');
  //     document.body.style.background = 'white'
  //     showAlert("Light mode is enabled", "success");
  //   } else {
  //     setMode('dark')
  //     document.body.style.background = '#303033'
  //     showAlert("Dark mode is enabled", "success");
  //   }
  // }

  return (
    <>
      {/* <Navbar title="TextUtils" aboutText="About TextUtils"  /> */}
      {/* <Navbar/> */}

      <Navbar title="TextUtils" mode={mode}  changeMode={changeMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        <TextForm heading="Enter the text to analize" mode={mode} showAlert={showAlert} changeMode={changeMode} />
        {/* <About/> */}
      </div>

    </>
  );
}

export default App;
