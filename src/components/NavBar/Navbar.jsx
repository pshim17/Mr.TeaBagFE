import { Link } from 'react-router-dom';
import Logo from '/src/assets/icons/mrteabaglogo.svg'; 
import './NavBar.css';

function Navbar() {
  return (
    <main className='navbar-container'>
        <header className='header'>
            <div className="logo-title-container">
            <Link to="/">
              <img className='logo' src={Logo} alt="Mr. Teabag logo" />
              <h1 className='title'>Mr. Teabag</h1>
              </Link>
            </div>
        </header>
    </main>
  );
}

export default Navbar;
