import logo from './flexlogo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      
      <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <script src=
        "https://www.google.com/recaptcha/api.js" async defer />
        
       
        <form class="login" action="action.php" method="post">

        <div class="login__field">
					<i class="login__icon fas fa-user"></i>
					<input type="text" name = "email" class="login__input" placeholder="Email" />
				</div>
          
		
        <div  class="g-recaptcha" data-sitekey="6LeszrQjAAAAAOe0tVYAt-DTNixnqPkbpeWUo9tt"  />
        <button class="button login__submit">
					<span class="button__text" name="submit_btn" type="submit"> Forgot Password </span>
					<i class="button__icon fas fa-chevron-right"></i>
				</button>	
        </form>
        
        
        <a
          className="App-link"
          href="https://www.flexxible.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          About Flexxible
        </a>
      </header>
    </div>
  );
}

export default App;
