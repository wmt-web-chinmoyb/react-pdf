import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
import ActionTable from './component/Table/Table';
import Button from './component/Button/Button';
import FormModal from './component/formModal/Form';


function App() {
  const [modelOpen,setModelOpen]=useState(false)
  const [formData, setFormData] = useState([]);
  const openFunction=()=>{
    setModelOpen(!modelOpen)
  }
  const eventData = (value) => {
    if (formData) {
      setFormData([...formData, value]);
    } else {
      setFormData([value]);
    }
  };
  console.log(formData,"FFf")
  
  return (
    <div className="App">
      {modelOpen && <FormModal modelOpen={modelOpen} setModelOpen={setModelOpen} formData={formData} eventData={eventData}/>}
      <div><Button  onclick={openFunction}/></div>
      <ActionTable formData={formData}/>
    </div>
  );
}

export default App;
