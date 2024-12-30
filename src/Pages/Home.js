import logo from '../Assets/Images/Logo/LOGO OKEY 8.png';
import '../Assets/Styles/Home.css';
import { Outlet, Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
        <nav>
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/nopage">NoPage</Link>
          </li>
        </ul>
      </nav>
        <div classname="div-logo">
            <p>Soy home</p>
            <img src={logo} alt="Logo" className='logo'/>
        </div>
    </div>
  );
}

export default Home;