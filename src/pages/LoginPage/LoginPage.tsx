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
                <div className={styles.wrapper}>
                    <h1></h1>
                    <LoginForm />
                    <a href="/register">Zaregistruj sa</a>
                </div>
            </IonContent>
        </IonPage>
    );
};

export default LoginPage;