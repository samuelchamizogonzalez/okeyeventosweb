import isotipo from '../Assets/Images/Logo/LOGO OKEY 11.png';
import logo from '../Assets/Images/Logo/LOGO OKEY 8.png';
import '../Assets/Styles/Landing.css';


function Landing() {
  return (
    <div className="landing">
      <div classname="div-isotipo">
        <img src={isotipo} alt="Isotipo" className='isotipo' />
      </div>
      <div classname="div-logo">
        <img src={logo} alt="Logo" className='logo' />
      </div>
    </div>
  );
}

export default Landing;
