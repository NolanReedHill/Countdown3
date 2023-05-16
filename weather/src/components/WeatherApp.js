import {useState, React} from 'react';
import TextInput from './TextInput.js';
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
        <div>
        
        <h1>Weather Tracker</h1>
        {formSubmitted? <p1></p1> :
            <p1>Enter your address</p1>}
        {formSubmitted? <p1></p1> : 
        <form method="post" onSubmit={handleSubmit}>
        <label>
          City: <input name="City" 
          />
        </label>
        <label>
          State (optional): <input name="State" 
          />
        </label>
        <label>
          Country: 
          <input name="Country"
          />
        </label>
        <button type="submit">Search</button>
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