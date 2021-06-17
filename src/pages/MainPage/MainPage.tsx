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
import Tab1 from '../Tab1';
import Tab2 from '../Tab2';
import Tab3 from '../Tab3';
import Tab4 from '../Tab4';
import LogRegPage from '../LogRegPage/LogRegPage';

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
//import './theme/variables.css';
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

  return(
    <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/tab2">
            <Tab2 />
          </Route>

          <Route exact path="/tab1">
            <Tab1 />
          </Route>

          <Route path="/tab3">
            <Tab3 />
          </Route>

          <Route exact path="/">
            <Redirect to="/tab1" />
          </Route>

        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="tab1" href="/tab1">
            <IonIcon icon={triangle} />
            <IonLabel>Tab 1</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab2" href="/tab2">
            <IonIcon icon={ellipse} />
            <IonLabel>Tab 2</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab3" href="/tab3">
            <IonIcon icon={square} />
            <IonLabel>Tab 3</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
  );

}

export default App;
