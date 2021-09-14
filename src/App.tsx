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

//Redux imports
import { useSelector } from "react-redux";

//Page imports
import EntryPage from "./pages/EntryPage/EntryPage"
import EventPage from "./pages/EventPage/EventPage"
import MainPage from './pages/MainPage/MainPage';
import LoginPage from './pages/LoginPage/LoginPage';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import ProfilePage from './pages/ProfilePage/ProfilePage';

import AppWrapper from './AppWrapper';

const App: React.FC = () => {

  const { user: currentUser } = useSelector((state: any) => state.isLoggedIn);

  useEffect(()=>{
    
  }, [])

  return(
    <IonApp>
      <IonReactRouter>
        <IonRouterOutlet>
          <>
            <Route exact path={["/", "/home"]} component={EntryPage} />
            <Route exact path="/login" component={LoginPage} />
            <Route exact path="/register" component={RegisterPage} />
            <Route path ="/" component={AppWrapper}  />
            <Route exact path="/profile" component={ProfilePage} />
            <Route exact path="/home" component={MainPage} />
            <Route exact path="/events" component={EventPage} />
          </>
        </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
  )
}

export default App;
