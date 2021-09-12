//React Imports
import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton } from '@ionic/react';

//Styling Imports
import styles from './EventPage.module.scss';

import Navigation from "../../components/Navigation/Navigation"
import Header from "../../components/Header/Header"

interface EntryPageInterface{
    isUser: Boolean
}

const EventPage: React.FC = () => {
    return(
        <IonPage>
            <IonContent fullscreen>
                <Header title={"Events"}></Header>
                <div className={styles.middle}>
                    Middle section
                </div>
                <div className={styles.lower}>
                    
                </div>
                <Navigation />
            </IonContent>
        </IonPage>
    );
};

export default EventPage;