import {FaSignInAlt,FaUser} from 'react-icons/fa'
import {Link} from 'react-router-dom'


function Header() {
  return (
    <header className='header'>
        <div className='logo'>
            <Link to='/'>SouthPole</Link> 
        </div>
        <ul>
            <li><Link to='/login'> <FaSignInAlt />Login</Link></li>
        </ul>
    </header>
  )
}

export default Header