
import './App.css';
import ForgotPassword from './components/ForgotPassword';
import LandingPageUser from './components/LandingPageUser';

import LogAdmin from './components/LogAdmin';
import { SelectUser } from './components/SelectUser';

import SettingSes2 from './components/SettingSes2';
import SettingSession from './components/SettingSession';
import Statements from './components/Statements';


function App() {
  return (
      <div className="App">
        <LogAdmin/>
        <SelectUser/>
        <LandingPageUser/>
        <ForgotPassword/>
        {/* <SettingSession/> */}
        <SettingSes2/>
        <Statements/>
       
        
         
      
      </div>
  );
}

export default App;
