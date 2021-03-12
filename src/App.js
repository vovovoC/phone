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
import Height from './components/Height';
import DateP from './components/Date';
// import FourFrom from './register/FourFrom';
// import FiveFrom from './register/FiveFrom';
// import SixFrom from './register/SixFrom';
import SevenFrom from './register/SevenFrom';
import EightFrom from './register/EightFrom';
import NineFrom from './register/NineFrom';
function App() {
  return (
    <Router>
    <main className="c">
       <Switch>
        <Route exact path='/' component={Main}/>
        <Route path='/signin' component={Layer}/>
        <Route path='/newpsw' component={NewPsw}/>
        <Route path='/recove' component={RecovePsw}/>
        <Route path='/saved' component={Saved}/>
        <Route path='/remember' component={Remember}/>
        <Route path='/registerPerson1' component={OneFrom}/>
        <Route path='/registerPerson2' component={TwoFrom}/>
        <Route path='/registerPerson3' component={ThreeFrom}/>
        <Route path='/registerPerson7' component={SevenFrom}/>
        <Route path='/registerPerson8' component={EightFrom}/>
        <Route path='/registerPerson9' component={NineFrom}/> 
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
