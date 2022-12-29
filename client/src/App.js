import logo from './flexlogo.svg';
import './App.css';
import axios from 'axios';






async function handleSubmit (event) {
  event.preventDefault();

}

// Send a get request including the token in the header
async function SendRequest (event) {
  const token = "2f8f065441ae4a80ab23f6b3cd9837b4" // Azure API Management subscription key
  event.preventDefault();
  console.log("res");
  //axios.get('https://testpasswordfunctions.azurewebsites.net/api/HttpTrigger2?clientId=apim-testpasswordAPI'),
  axios.get('https://testpasswordapi.azure-api.net/testpasswordfunctions/HttpTrigger2'),
  {
    headers: {
      'Ocp-Apim-Subscription-Key': token
    }
  }
  .then((res)=>{
    console.log(res);
   
  })
  

function App() {



  return (
    <div className="App">
      
      <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <script src=
        "https://www.google.com/recaptcha/api.js" async defer />
        
       
        <form class="login" onSubmit={handleSubmit}  method="post">

        <div class="login__field">
					<i class="login__icon fas fa-user"></i>
					<input type="text" name = "email" class="login__input" placeholder="Email" />
				</div>
          
		
        <div  class="g-recaptcha" data-sitekey="6LeszrQjAAAAAOe0tVYAt-DTNixnqPkbpeWUo9tt"  />
        <button class="button login__submit"  onClick={SendRequest} >
					<span class="button__text" name="submit_btn" > Forgot Password </span>
					<i class="button__icon fas fa-chevron-right"></i>
				</button>	
        </form>
        
        
        <a
          className="App-link"
          href="https://www.flexxible.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          
        </a>
      </header>
    </div>
  );
}

export default App;
