import './Header.css'
import burger from './burger.svg'
import cart from './shopping-cart.svg'

export default function Header(){
    return(
        <header>
            <div className = 'menu-burger'>
                <img src={burger} alt="Menu"/>
            </div>
            <h3>FourTricks</h3>
            <div className = 'shopping-cart'>
                <img src={cart} alt="Cart"/>
            </div>
        </header>
    )
}