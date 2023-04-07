import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
import ActionTable from './component/Table/Table';
import Button from './component/Button/Button';
import FormModal from './component/formModal/Form';

function App() {
  const [modelOpen,setModelOpen]=useState(false)
  const openFunction=()=>{
    setModelOpen(!modelOpen)
  }
  console.log(modelOpen)
  return (
    <div className="App">
      {modelOpen && <FormModal modelOpen={modelOpen} setModelOpen={setModelOpen}/>}
      <div><Button  onclick={openFunction}/></div>
      <ActionTable/>
    </div>
  );
}

export default App;
