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
import {login} from "../../redux/actions/login"
import {logout} from "../../redux/actions/logout"

import { register } from "../../redux/actions/auth";


const RegisterForm: React.FC = () => {

  const form = useRef() as any;
  const checkBtn = useRef() as any;

  const history = createBrowserHistory();

  const isLogged = useSelector((state: any) => state.loggedIn);

  const dispatch = useDispatch();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [secpassword, setSecPassword] = useState("");
  const [successful, setSuccessful] = useState(false);

  //function redirectOnRegister(){
  //  return <Redirect to={"/tab2"} />
  //}

  const [succesfulLogin, setSuccesfulLogin] = useState(false);

  //useEffect(()=>{
  //  console.log(succesfulLogin)
  //}, [succesfulLogin])

  //useEffect(()=>{
  //  console.log(password)
  //}, [password])

  const handleRegister = () => {

    setSuccessful(false);

    form.current.validateAll();

    if(password == secpassword){
      dispatch(register(username , password, dispatch))
      .then(() => {
        setSuccessful(true);
        console.log("Registration succesful!")
      })
      .catch(() => {
        setSuccessful(false);
      });
    }else{
      console.log("Passwords do not match.")
    }
  };

  const handleSubmit = () =>{
    console.log("Submitting")

    if(password == secpassword){
      fetch('http://localhost:8110/users/', {
        method: 'POST',
        headers: {
        "Content-type": "application/json",
        "Access-Control-Allow-Origin": "*"
        },
        mode: 'cors',
        body: JSON.stringify({
          "username": username, 
          "password": password
        })
      }).then(res => {
        res.json()
      }).then(data => console.log(data))
      .catch(error => console.log(error))
      .finally(()=>{
        
      })
    }else{
      console.log("Hesla sa nezhoduju")
    }
  };
    return (
      <IonPage>
        <IonContent>
          <Form onSubmit={handleRegister} ref={form}>
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
                <IonButton type="submit" expand="block" fill="outline">Zaregistruj Sa</IonButton>
              </IonCol>
              <IonCol></IonCol>
            </IonRow>
          </IonGrid>
          </Form>
          <button className={styles.testbutton} onClick={()=> {
            dispatch(login()) 
            console.log()
            history.push("/")
            history.go(0)
          }}></button>
        </IonContent>
      </IonPage>
    );
};

export default RegisterForm;
