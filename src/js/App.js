import '../css/App.css';
import Navbar from '../components/navbar';
import About from '../js/about';
import Home from '../js/home';
import Oring from '../js/products/oRing.js';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

function App() {
  return (
    <>
    <Router>
      {/* Title Bar */}
      <div className='container-fluid'>
        <div className='row fixed-top'>
          <div className='col-lg-12'>
            <h1 className='text-white py-2 text-uppercase company-title text-center'>
              Jennifer Technology Hengshui Co Ltd</h1>
          </div>
        </div>

        <div className='row'>
          {/* Navigation Bar */}
          <div className='col-lg-2 position-fixed mt-5 pt-5'>
            <Navbar />
          </div>

          <div className='col-lg-10 content mt-5 pt-5'>  
            
            <Switch>
              {/* Home Screen */}
              <Route exact path='/'>
                <Home />
              </Route>

              {/* About Us Screen */}
              <Route exact path='/aboutUs'>
                <About />
              </Route> 

              <Route exact path='/O-Ring'>
                <Oring />
              </Route> 
            </Switch>             
          </div>

        </div>
      </div>
    </Router>
    </>
  );
}

export default App;
