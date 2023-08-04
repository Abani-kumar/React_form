
import './App.css';
import { useState } from 'react';

function App() {
  const [formData,setFormData]=useState( {firstName:"",lastName:"",comments:"",isVisible:true,mode:"",favCar:""});

  function changeHandler(event){
    const {name,value,checked,type}=event.target
    setFormData( prevFormData =>{
      return{
        ...prevFormData,
        [name]:type==="checkbox" ?checked:value
      }
    })
  }

  function submitHandler(event){
    event.preventDefault();
    //print
    console.log("all data")
    console.log(formData)
  }
  return (
    <div className="App">
      <form onSubmit={submitHandler}>

        <input type='text' placeholder='First name' 
        onChange={changeHandler}
        name='firstName'
        value={formData.firstName}
        />
        <br></br>
        <br/>
        <input type='text' placeholder='Last name' 
        onChange={changeHandler}
        name='lastName'
        value={formData.lastName}
        />

        <br></br>
        <br></br>
        <textarea placeholder='Enter your comments' 
        onChange={changeHandler}
        name='comments'
        value={formData.comments}
        />

        <br></br>
        <br></br>

        <input type='checkbox'
          onChange={changeHandler}
          name='isVisible'
          id='isVisible'
          checked={formData.isVisible}
        />

        <label htmlFor='isVisible'>Am i visible ?</label>

        <br></br>
        <br></br>
        <fieldset>
          <legend>Mode:</legend>
          <input
        type='radio'
        onChange={changeHandler}
        name='mode'
        value="Online-Mode"
        id='Online-Mode'  
        checked={formData.mode==="Online-Mode"}
        />

        <label htmlFor='Online-Mode'>Online Mode</label>

        <input
        type='radio'
        onChange={changeHandler}
        name='mode'
        value="Offline-Mode"
        id='Offline-Mode' 
        checked={formData.mode==="Offline-Mode"} 
        />

        <label htmlFor='Offline-Mode'>Offline Mode</label>
        </fieldset>

        <select
          name="favCar"
          id='favCar'
          value={formData.favCar}
          onChange={changeHandler}
        >

        <option value="scorpio">Scorpio</option>
        <option value="fortuner">fortuner</option>
        <option value="Thar">Thar</option>
        <option value="Legender">Legender</option>
        <option value="Defender">Defender</option>
        </select>
        
        <label htmlFor='favCar'>Tell me your favourite car ?</label>

        <br></br>
        <br></br>
        <button>submit</button>
      
      </form>
    </div>
  );
}

export default App;
