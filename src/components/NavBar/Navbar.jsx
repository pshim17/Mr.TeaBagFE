import { Link, useLocation } from 'react-router-dom';
import Logo from '/src/assets/icons/mrteabaglogo.svg'; 
import './NavBar.css';

function Navbar({ teaSubscriptions, setTeaSubscriptions }) {
  const location = useLocation(); 

  function sortAlphabetically() {
    const sortedSubscriptions = [...teaSubscriptions];

    sortedSubscriptions.sort(function (a, b) {
      if (a.attributes.title.toLowerCase() > b.attributes.title.toLowerCase()) {
        return 1;
      }
      return -1;
    });
    setTeaSubscriptions(sortedSubscriptions);
  }

  return (
    <main className='navbar-container'>
      <header className='header'>
        <div className="logo-title-container">
          <Link to="/">
            <img className='logo' src={Logo} alt="Mr. Teabag logo" />
            <h1 className='title'>Mr. Teabag</h1>
            {location.pathname === '/' && (
              <button className="sort-button" onClick={sortAlphabetically}>Sort By Name</button>
            )}
          </Link>
        </div>
      </header>
    </main>
  );
}

export default Navbar;
