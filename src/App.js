import React from 'react';
import './App.css';
//import Dashboard from './Components/Dashboard/Dashboard';
import {Provider} from 'react-redux';
import store from './Components/redux/store';
import Router1 from './Components/router/router';
//import Signin from './Components/signin/signin';
//import Signup from './Components/signup/signup';
 //import Header from './Components/Header/Header';
//import TakeNoteOne from './Components/TakeNoteOne/TakeNoteOne';
//import TakeNoteThree from './Components/TakeNoteThree/TakeNoteThree';
//import TakeNoteTwo from './Components/TakeNoteTwo/TakeNoteTwo';


 function App() {
  
  return (  
   <div className='App'>
       <Provider store={store}>
        <Router1></Router1>
       </Provider>

         {/* <Signup></Signup>   */}
        {/* <Signin></Signin>       */}
        {/*<Header></Header> */}
         {/*<TakeNoteOne></TakeNoteOne>    */}
        {/*<TakeNoteTwo></TakeNoteTwo>  */}
         {/* <TakeNoteThree></TakeNoteThree>      */}
        {/* <Dashboard></Dashboard>          */}

         
    </div>

  );
}

export default App;
