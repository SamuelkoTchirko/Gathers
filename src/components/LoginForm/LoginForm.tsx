import React, { useEffect, useState, useRef } from 'react';
import { useHistory , Redirect} from "react-router-dom";

/* eslint-disable */
// @ts-ignore
import Form from 'react-validation/build/form';
// @ts-ignore
import Input from "react-validation/build/input";
// @ts-ignore
import CheckButton from "react-validation/build/button";
/* eslint-enable */

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { createBrowserHistory } from 'history'

import { IonButton, IonGrid, IonCol, IonRow, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonInput, IonItem, IonLabel, IonList, IonItemDivider } from '@ionic/react';
import styles from './LoginForm.module.scss';
import axios from "axios"

import App from '../../App';


//Redux
import { useSelector , useDispatch} from "react-redux"

//Actions
import { login } from "../../redux/actions/auth";


const LoginForm: React.FC = () => {

  //const form = useRef() as any;
  //const checkBtn = useRef() as any;

  const history = createBrowserHistory();

  const isLoggedIn = useSelector((state: any) => state.loggedIn);

  const dispatch = useDispatch();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [successful, setSuccessful] = useState(false);

  //function redirectOnRegister(){
  //  return <Redirect to={"/tab2"} />
  //}

  const [succesfulLogin, setSuccesfulLogin] = useState(false);

  useEffect(()=>{
    console.log(successful + "succesful value login")
  }, [successful])

  useEffect(()=>{
    console.log(isLoggedIn)
  }, [isLoggedIn])


  //Handle login after submitting the form
  const handleLogin = () => {

    setSuccessful(false);

    login(username, password).then(value => {
      setSuccessful(true);
      console.log("Login successful!" + value)
      dispatch({
        type: "LOGIN_SUCCESS",
        payload: { user: value },
      });
      history.push("/");
      history.go(0);
    }, reason => {
      console.log("Login failed!" + reason)
      dispatch({
        type: "LOGIN_FAIL",
      });
    })
    }

    return (
      <IonPage>
        <IonContent>
          <form>
          <IonGrid>
            <IonRow className={styles.upperPadding}>
              
            </IonRow>
            <IonRow>
              <IonCol>
          
              </IonCol>
              <IonCol size="10">
                <IonItem>
                  <IonLabel position="floating">Pouzivatelske Meno</IonLabel>
                  <IonInput
                    type="text"
                    name="username"
                    onIonInput={(e: any) => setUsername(e.target.value)}
                  />
                </IonItem>
              </IonCol>
              <IonCol>
  
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
  
              </IonCol>
              <IonCol size="10">
                <IonItem>
                  <IonLabel position="floating">Heslo</IonLabel>
                  <IonInput
                  type="password"
                  name="password"
                  value={password}
                  onIonInput={(e: any) => setPassword(e.target.value)}
                  />
                </IonItem>
              </IonCol>
              <IonCol>
  
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol></IonCol>
              <IonCol size="4">
                <br />
                <br />
                <IonButton onClick={handleLogin} expand="block" fill="outline">Prihlas Sa</IonButton>
              </IonCol>
              <IonCol></IonCol>
            </IonRow>
          </IonGrid>
          </form>
          <button className={styles.testbutton} onClick={()=> {
            console.log()
            history.push("/")
            history.go(0)
          }}></button>
        </IonContent>
      </IonPage>
    );
};

export default LoginForm;
