
import './App.css';
import Header from "./Header/Header";
import Prew from './vectors/prew_photo.png'


const tg = window.Telegram.WebApp;




function App() {

  return (
    <div className="App">
      <Header />
        <img className='prew_photo' src={Prew} alt=""/>
    </div>
  );
}

export default App;
