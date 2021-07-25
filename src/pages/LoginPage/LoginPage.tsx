//React Imports
import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';

//Component Imports
import LoginForm from '../../components/LoginForm/LoginForm';

//Styling Imports
import styles from './LoginPage.module.scss';

interface RegisterPageInterface{
    type: string
}

const LoginPage: React.FC = () => {
    return(
        <IonPage>
            <IonContent fullscreen>
                <LoginForm />
            </IonContent>
        </IonPage>
    );
};

export default LoginPage;