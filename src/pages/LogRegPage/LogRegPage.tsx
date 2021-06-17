//React Imports
import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';

//Component Imports
import LoginForm from '../../components/LoginForm/LoginForm';
import RegisterForm from '../../components/RegisterForm/RegisterForm';

//Styling Imports
import styles from './LogRegPage.module.scss';

interface LogRegInterface{
    type: string
}

const LogRegPage: React.FC<LogRegInterface> = ({type}) => {

    if(type == "login"){
        return (
            <IonPage>
              <IonContent fullscreen>
                <LoginForm />
              </IonContent>
            </IonPage>
          );
    }else{
        return (
            <IonPage>
              <IonContent fullscreen>
                <RegisterForm />
              </IonContent>
            </IonPage>
          );
    }
};

export default LogRegPage;
