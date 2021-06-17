import { Redirect, Route} from 'react-router-dom';
import { BrowserRouter as Router} from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";

import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from '@ionic/react';

import { IonReactRouter } from '@ionic/react-router';
import { ellipse, square, triangle } from 'ionicons/icons';
import Tab1 from './pages/Tab1';
import Tab2 from './pages/Tab2';
import Tab3 from './pages/Tab3';
import Tab4 from './pages/Tab4';
import LogRegPage from './pages/LogRegPage/LogRegPage';
import MainPage from './pages/MainPage/MainPage';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import { renderIntoDocument } from 'react-dom/test-utils';

const App: React.FC = () => {
  const history = useHistory();

  const [loggedIn, setLoggedIn] = useState(false);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    fetch("http://localhost:8110/user/logged")
    .then(res => res.json())
    .then(
      (result) => {
        //console.log(result)
        setIsLoaded(true);
        setLoggedIn(result);
      },
      
      (error) => {
        setIsLoaded(true);
        setError(error);
      }
    )
  }, []);

  /*useEffect(()=>{
    console.log(loggedIn+"so ez");
  }, [loggedIn])*/

  function renderRegister(){
    history.push("/register");
  }
  function renderTab2(){
    history.push("/register");
  }

  if(loggedIn){
    return(
      <MainPage/>
    );
  }else{
    return(
      <LogRegPage type="register"/>
    );
  }
}

export default App;