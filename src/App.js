
import './App.css';
import {useEffect} from "react";
import './Header/Header.css'
import Header from "./Header/Header";


const tg = window.Telegram.WebApp;




function App() {

  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;
