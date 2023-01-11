import logo from './flexlogo.svg';
import './App.css';
import axios from 'axios';
import React, { useState } from 'react';





async function handleSubmit(event) {
  event.preventDefault();

}

// Send a get request including the token in the header


function App() {

  const [pokeid, setButtonText] = useState('');

  // pone invisible el segundo formulario
  const [primerForm, setFormVisible] = useState('text'); // pone visible el segundo formulario
  const [message, setMessage] = useState('');

  const handleChange = event => {
    setMessage(event.target.value);


  };

  async function changeVis(type) {

    var segundoForm = document.getElementById('segundoForm');
    var captcha = document.getElementById('captcha');
    segundoForm.style.visibility = type;
    captcha.style.visibility = 'hidden';
  }

  var userverified = false;
  async function SendRequest(event) {
    const token = "2f8f065441ae4a80ab23f6b3cd9837b4" // Azure API Management subscription key
    event.preventDefault();
    console.log("res");
    //axios.get('https://testpasswordfunctions.azurewebsites.net/api/HttpTrigger2?clientId=apim-testpasswordAPI'),

    const data = {
      mail: message

    };

    const config = {
      headers: {
        'Ocp-Apim-Subscription-Key': token
      }
    };

    // Depending if the user is verified or not, the request when pressing the button will be different

    if (userverified === true) {
      setButtonText("A pin has been sent, please introduce it in the box to reset your password");
    }
    else {
      axios.post('https://testpasswordapi.azure-api.net/testpasswordfunctions/comprobarusuario', data, config)
        .then((res) => {
          console.log(res);
          try {
            if (res.data[0].u_unlock_user_allowed === "true" && res.data[0].u_reset_password_allowed === "true") {
              setButtonText("User verified, please select the reset method");
              // Verify user changing the boolean
              userverified = true;
              setFormVisible('hidden');
              changeVis('visible');
            }
            else {
              setButtonText("User not verified or function not available");
            }
            //setButtonText("Su ID es: "+ res.data);
          }
          catch (error) {
            setButtonText("Domain not found, please check the introduced mail address");
          }

        }, (error) => {
          setButtonText('Domain not found, please check the introduced mail address');
        });
    }
  }


  return (
    <div className="App">

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <script src=
          "https://www.google.com/recaptcha/api.js" async defer />


        <form class="login" onSubmit={handleSubmit} method="post">

          <div class="login__field">
            <i class="login__icon fas fa-user"></i>
            <input type={primerForm} name="email" class="login__input" onChange={handleChange} value={message} placeholder="Email" />
            <select id="segundoForm" class="login__selector" name="typepins" >
              <option value="pJefe">send PIN to manager's email</option>
              <option value="pSMS">send PIN by SMS</option>


            </select>
          </div>

          <div class="login__field">
            <div id="captcha" class="g-recaptcha" data-sitekey="6LeszrQjAAAAAOe0tVYAt-DTNixnqPkbpeWUo9tt" />
            <button class="button login__submit" onClick={userverified ? setButtonText("A pin has been sent, please introduce it in the box to reset your password") : SendRequest} >
              <span class="button__text" name="submit_btn" > Forgot Password </span>
              <i class="button__icon fas fa-chevron-right"></i>
            </button>
          </div>
        </form>


        <a
          className="App-link"
          href="https://www.flexxible.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          {pokeid}
        </a>
      </header>
    </div>
  );
}

export default App;
