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
import styles from './RegisterForm.module.scss';
import axios from "axios"

import App from '../../App';


//Redux
import { useSelector , useDispatch} from "react-redux"

//Actions
import { register } from "../../redux/actions/auth";


const RegisterForm: React.FC = () => {

  //const form = useRef() as any;
  //const checkBtn = useRef() as any;

  const history = createBrowserHistory();

  const isLoggedIn = useSelector((state: any) => state.loggedIn);

  const dispatch = useDispatch();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [secpassword, setSecPassword] = useState("");
  const [successful, setSuccessful] = useState(false);

  //function redirectOnRegister(){
  //  return <Redirect to={"/tab2"} />
  //}

  const [succesfulLogin, setSuccesfulLogin] = useState(false);

  useEffect(()=>{
    console.log(successful)
  }, [successful])

  useEffect(()=>{
    console.log(isLoggedIn)
  }, [isLoggedIn])


  //Handle registration after submitting the form
  const handleRegister = () => {

    setSuccessful(false);

    //form.current.validateAll();

    if(password == secpassword){
      register(username, password).then(value => {
        setSuccessful(true);
        console.log("Registration successful!")
        dispatch({
          type: "REGISTER_SUCCESS",
        });
        history.push("/login")
        history.go(0)
      }, reason => {
        console.log("Registration failed!" + reason)
        dispatch({
          type: "REGISTER_FAIL",
        });
      })
    }else{
      console.log("Passwords do not match.")
    }
  };

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
              <IonCol>
  
              </IonCol>
              <IonCol size="10">
                <IonItem>
                  <IonLabel position="floating">Zopakuj Heslo</IonLabel>
                  <IonInput
                  type="password"
                  name="password"
                  value={secpassword}
                  onIonInput={(e: any) => setSecPassword(e.target.value)}
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
                <IonButton onClick={handleRegister} expand="block" fill="outline">Zaregistruj Sa</IonButton>
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

export default RegisterForm;
