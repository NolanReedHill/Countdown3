import {useState, React} from 'react';
import TextInput from './TextInput.js';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
export default function WeatherApp() {
    const [isAddress, setIsAddress] = useState(false);
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [address, setAddress] = useState({});
    function handleSubmit(e) {
        // Prevent the browser from reloading the page
        e.preventDefault();
    
        // Read the form data
        const form = e.target;
        const formData = new FormData(form);
    
   
        const formJson = Object.fromEntries(formData.entries());
        setAddress(formJson);
        if (address.City !== "" && address.Country !== '') {
        setIsAddress(true);
        setFormSubmitted(true);
        }
      }
    return (
        <div className= "inputForm">
        
        <h1>Nolan's Weather App</h1>
        {formSubmitted? <p1></p1> :
            <p1>Enter Location</p1>}
        {formSubmitted? <p1></p1> : 
        <form method="post" onSubmit={handleSubmit}>
        <label>
          City: <TextField 
          className= "textBoxes" 
          name="City" 
          variant= "outlined"
          required
          />
        </label>
        <label>
          State (optional): 
          <TextField 
          className= "textBoxes" 
          name="State" 
          />
        </label>
        <label>
          Country: 
          <TextField 
          className= "textBoxes" 
          name="Country"
          required
          />
        </label>
        <Button 
        className= "searchButton"
        type="submit"
        variant="contained"
        color="success"
        style= {{margin: "15px"}}
        >Search</Button>
      </form>
}
      <div>
      {!isAddress? <p></p> :
      <TextInput
      data={address}
      />
      }
      </div>
        </div>
    )



}