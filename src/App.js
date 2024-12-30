import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Landing from './Pages/Landing';
import Home from './Pages/Home';
import NoPage from './Pages/NoPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Landing/>}/>
            <Route path='home' element={<Home/>}/>
            <Route path='*' element={<NoPage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
