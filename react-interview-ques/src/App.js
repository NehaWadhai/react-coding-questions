import { BrowserRouter,Routes ,Route, Link, useNavigate} from 'react-router-dom';
import './App.css';
import CounterComponent from './components/CounterComponent';
import LinkedListComponent from './data-structure/LinkedList/LinkedListComponent';
import { use } from 'react';
import { RouterComponent } from './components/router';

function App() {


  return (
   
      <div>
      <BrowserRouter>
       {/* <LinkedListComponent/> */}
       {/* <CounterComponent /> */}
       <div>
        <nav>
          <ul>
            <li>
              <Link to="/age">Age</Link>
            </li>
            <li>
              <Link to="/name">Name</Link>
            </li>
          </ul>
          </nav>
       </div>
       <Routes>
       <Route path="/age" element={<LinkedListComponent />} />
       <Route path="/name" element={<CounterComponent />} />
       </Routes>
    <RouterComponent />
       Hello Neha!
       </BrowserRouter>
      </div>
  );
}

export default App;
