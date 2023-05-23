import logo from './logo.svg';
import './App.css';
import Articles from './components/Index';
import React from 'react';


function App() {
  return (
    <div className="App">
      <div className="First-Logo"> 
        medium alike
      </div>
      <div className="Second-Logo">
        Hello, world!
      </div>
      <div>
        <Articles />
      </div>
      <div className='ArticleDivider'></div>
    </div>
  );
}

export default App;

{/* <footer>
        <div class="credits">Credits: photos from Unsplash.com, icons from Icons8, graphics from craftwork.design.</div>
        <div class="love">Made with ✨❤️ at nFactorial in 2022.</div>
      </footer> */}