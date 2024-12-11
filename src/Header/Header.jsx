import './Header.css'
import burger from './burger.svg'
import cart from './shopping-cart.svg'

export default function Header(){
    return(
        <header>
            <div class = 'menu-burger'>
                <img src={burger} alt="Menu"/>
            </div>
            <h3>FourTricks</h3>
            <div class = 'shopping-cart'>
                <img src={cart} alt="Cart"/>
            </div>
        </header>
    )
}