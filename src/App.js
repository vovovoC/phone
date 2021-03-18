// import {Route} from 'react-router-dom'
import React from 'react'
import Layer from './layers/Layer'
import {BrowserRouter as Router, Route , Switch} from 'react-router-dom'
import Main from './layers/Main';
import RecovePsw from './layers/RecovePsw';
import NewPsw from './layers/NewPsw';
import Saved from './layers/Saved';
import Remember from './layers/Remember';
import OneFrom from './register/OneFrom';
import TwoFrom from './register/TwoFrom';
import ThreeFrom from './register/ThreeFrom';
// import FourFrom from './register/FourFrom';
// import FiveFrom from './register/FiveFrom';
// import SixFrom from './register/SixFrom';
import SevenFrom from './register/SevenFrom';
import EightFrom from './register/EightFrom';
import NineFrom from './register/NineFrom';
import DiseaseLayer from './enterInfo/DiseaseLayer';
import DiseaseList from './enterInfo/DiseaseList';
import DoctorList from './enterInfo/DoctorList';
import CalendarNavbar from './calendar/CalendarNavbar';
import Profile from './profile/Profile';
import Recommendation from './profile/Recommendation';
import Purpose from './profile/Purpose';
import Passport from './profile/Passport';
import DiseaseInfo from './disease/DiseaseInfo';
function App() {
  // const id = 1230594864;
  return (
    <Router path='/vitalem'>
    <main className="c">
       <Switch>
        <Route exact path='/' component={Main}/>
        <Route path='/signin' component={Layer}/>
        <Route path='/newpsw/:id' component={NewPsw}/>
        <Route path='/recove/:id' component={RecovePsw}/>
        <Route path='/saved/:id' component={Saved}/>
        <Route path='/remember/:id' component={Remember}/>
        <Route path='/registerPerson1' component={OneFrom}/>
        <Route path='/registerPerson2' component={TwoFrom}/>
        <Route path='/registerPerson3' component={ThreeFrom}/>
        <Route path='/registerPerson7' component={SevenFrom}/>
        <Route path='/registerPerson8' component={EightFrom}/>
        <Route path='/registerPerson9' component={NineFrom}/> 
        <Route path='/heart' component={DiseaseLayer}/> 
        <Route path='/list' component={DiseaseList}/> 
        <Route path='/listDoctor' component={DoctorList}/> 
        <Route path='/calendar' component={CalendarNavbar}/> 
        <Route path='/profile' component={Profile}/> 
        <Route path='/recommendation' component={Recommendation}/> 
        <Route path='/purpose' component={Purpose}/> 
        <Route path='/passport' component={Passport}/> 
        <Route path='/aboutProject' component={Profile}/> 
        <Route path='/disease' component={DiseaseInfo}/> 
        {/* 
         <Route path='/registerPerson4' component={FourFrom}/>
          <Route path='/registerPerson5' component={FiveFrom}/>
          <Route path='/registerPerson6' component={SixFrom}/>
      */}
       </Switch>
    </main>
    </Router>
  );
}

export default App;
