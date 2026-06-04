import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [fileData, setFileData] = useState();


  const scanFile = (event) => {
    const file = event.target.files[0];


    const reader = new FileReader();
    reader.readAsText(file);  
    reader.onload = () => {
      console.log(file.name);
      console.log(reader.result);
      setFileData(reader.result.trim());
    };
    reader.onerror = () => {
      console.log("file error", reader.error);
    };
  };

  const arrangeFile = () => {
    const fileArray = fileData.split(/\r?\n/);
    console.log(fileArray);
  };


  return (
    <div>
      <input type="file" onChange={scanFile} />
      <button onClick={arrangeFile}>Arrange Document</button>
    </div>
  );

}


export default App;