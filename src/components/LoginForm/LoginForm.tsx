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

  useEffect(()=>{
    console.log(username)
  }, [username])

  useEffect(()=>{
    console.log(password)
  }, [password])

  //Handle login after submitting the form
  const handleLogin = () => {
    console.log("Attempting login")
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
        <div className={styles.wrapper}>
          <div className={styles.form_wrapper}>
            <form>
              <div className={styles.padding}></div>
              <label className={styles.field}>
                <input type="text" placeholder=" " onChange={(e: any) => setUsername(e.target.value)}/>
                <span className={styles.placeholder}>Pouzivatelske meno</span>
              </label>
              <label className={styles.field}>
                <input type="password" placeholder=" " onChange={(e: any) => setPassword(e.target.value)}/>
                <span className={styles.placeholder}>Heslo</span>
              </label>  
              <div className={styles.padding}></div>
              <button type="button" onClick={handleLogin}>Prihlas Sa</button>
            </form>
          </div>
        </div>
    );
};

export default LoginForm;
