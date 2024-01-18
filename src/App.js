import logo from './logo.svg';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Process from './pages/Process/Process';
import CustomNodeFlow from './pages/Process/CustomNodeFlow';
import NCdetector from './pages/NCdetector';
import About from './pages/About';
import Login from './pages/login/LoginForm';
import RegisterForm from './pages/signup/RegisterForm';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path='' element={<About />} />
          <Route path='about' element={<About />}  />
          <Route path='login' element={<Login />}  />
          <Route path='register' element={<RegisterForm />}  />
          <Route path='process' element={<Process />} />
          <Route path='NCdetector' element={<NCdetector />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
