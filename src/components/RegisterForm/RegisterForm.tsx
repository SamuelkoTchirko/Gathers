import React, { useEffect, useState } from 'react';
import { useHistory , Redirect} from "react-router-dom";

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



const RegisterForm: React.FC = () => {

  const history = createBrowserHistory();

  const isLogged = useSelector((state: any) => state.loggedIn);
  const dispatch = useDispatch();

  const [nickname, setNickname] = useState("");
  const [password, setPassword] = useState("");
  const [secpassword, setSecPassword] = useState("");

  //function redirectOnRegister(){
  //  return <Redirect to={"/tab2"} />
  //}

  const [succesfulLogin, setSuccesfulLogin] = useState(false);

  //useEffect(()=>{
  //  console.log(succesfulLogin)
  //}, [succesfulLogin])

  useEffect(()=>{
    console.log(isLogged)
  }, [isLogged])

  const handleSubmit = () =>{
    console.log("Submitting")

    if(password == secpassword){
      fetch('http://localhost:8110/users/', {
        method: 'POST',
        headers: {
        "Content-type": "application/json"
        },
        body: JSON.stringify({
          "nickname": nickname, 
          "password": password
        })
      }).then(res => {
        res.json()
      }).then(data => console.log(data))
      .catch(error => console.log(error))
      .finally(()=>{setSuccesfulLogin(true)})
    }else{
      console.log("Hesla sa nezhoduju")
    }

    window.location.href = "/";
  }

  if(succesfulLogin){
    return (
      <>
        <App />
      </>

    )
  }else{
    return (
      <IonPage>
        <IonContent>
          <form onSubmit={handleSubmit}>
          <IonGrid>
            <IonRow className={styles.upperPadding}>
              
            </IonRow>
            <IonRow>
              <IonCol>
          
              </IonCol>
              <IonCol size="10">
                <IonItem>
                  <IonLabel position="floating">Pouzivatelske Meno</IonLabel>
                  <IonInput name="nickname" onIonInput={(e: any) => setNickname(e.target.value)}></IonInput>
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
                  <IonInput type="password" onIonInput={(e: any) => setPassword(e.target.value)}></IonInput>
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
                  <IonInput type="password" onIonInput={(e: any) => setSecPassword(e.target.value)}></IonInput>
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
                <IonButton onClick={handleSubmit} type="submit" expand="block" fill="outline">Zaregistruj Sa</IonButton>
              </IonCol>
              <IonCol></IonCol>
            </IonRow>
          </IonGrid>
          </form>
          <button className={styles.testbutton} onClick={()=> {
            dispatch(login()) 
            console.log()
            history.push("/")
            history.go(0)
          }}></button>
        </IonContent>
      </IonPage>
    );
  }
};

export default RegisterForm;
