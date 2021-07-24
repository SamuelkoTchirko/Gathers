//React Imports
import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';

//Component Imports
import LoginForm from '../../components/LoginForm/LoginForm';
import RegisterForm from '../../components/RegisterForm/RegisterForm';

//Styling Imports
import styles from './RegisterPage.module.scss';

interface RegisterPageInterface{
    type: string
}

const RegisterPage: React.FC = () => {
    return(
        <IonPage>
            <IonContent fullscreen>
                <RegisterForm />
            </IonContent>
        </IonPage>
    );
};

export default RegisterPage;
