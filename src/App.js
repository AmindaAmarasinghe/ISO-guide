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
// import SamplePdf1 from './components/Pdf_forms/SamplePdf1';
import RegisterForm from './pages/signup/RegisterForm';
import Guide from './pages/Guide';
import Scope from './pages/Guide/Scope';
import NormativeReferences from './pages/Guide/NormativeReferences';
import Context from './pages/Guide/Context';
import Leadership from './pages/Guide/Leadership';
import Planning from './pages/Guide/Planning';
import Support from './pages/Guide/Support';
import Operation from './pages/Guide/Operation';
import Evaluation from './pages/Guide/Evaluation';
import Improvement from './pages/Guide/Improvement';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path='' element={<About />} />
          <Route path='about' element={<About />}  />
          {/* <Route path='pdf' element={<SamplePdf1 />}/> */}
          <Route path='login' element={<Login />}  />
          <Route path='register' element={<RegisterForm />}  />
          <Route path='guide' element={<Guide />} />
          <Route path='scope' element={<Scope leftLink="/" left="Home" right="Normative References" rightLink="normativeReferences"/>} />
          <Route path='normativeReferences' element={<NormativeReferences leftLink="scope" left="Scope" right="Terms & conditions" rightLink="orgContext"/>} />
          <Route path='orgContext' element={<Context leftLink="normativeReferences" left="Normative References" right="Leadership" rightLink="leadership"/>} />
          <Route path='leadership' element={<Leadership leftLink="orgContext" left="Context of the organization" right="Planning" rightLink="planning"/>} />
          <Route path='planning' element={<Planning leftLink="leadership" left="Leadership" right="Support" rightLink="support"/>} />
          <Route path='support' element={<Support leftLink="planning" left="Planning" right="Operation" rightLink="operation"/>} />
          <Route path='operation' element={<Operation leftLink="support" left="Support" right="Evaluation" rightLink="evaluation"/>} />
          <Route path='evaluation' element={<Evaluation leftLink="operation" left="Operation" right="Improvement" rightLink="improvement"/>} />
          <Route path='improvement' element={<Improvement leftLink="evaluation" left="Evaluation" right="Home" rightLink="/"/>} />
          <Route path='process' element={<Process />} />
          <Route path='NCdetector' element={<NCdetector />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
