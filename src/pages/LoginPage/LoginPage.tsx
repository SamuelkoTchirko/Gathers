//React Imports
import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';

//Component Imports
import LoginForm from '../../components/LoginForm/LoginForm';

//Styling Imports
import styles from './LoginPage.module.scss';

//Components
import Header from "../../components/Header/Header"


const LoginPage: React.FC = () => {
    return(
        <IonPage>
            <IonContent fullscreen>
                <Header title="Login"></Header>
                <a href="/register">Zaregistruj sa</a>
                <LoginForm />
            </IonContent>
        </IonPage>
    );
};

export default LoginPage;