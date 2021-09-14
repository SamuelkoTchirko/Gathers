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
                <div className={styles.header}>
                    <div className={styles.svg_wrapper}>
                        <svg viewBox="0 0 500 500" preserveAspectRatio="xMinYMin meet">
                            <path d="M0,100 C150,200 350,0 500,100 L500,00 L0,0 Z"></path>
                        </svg>
                    </div>
                    <h1>Events</h1>
                </div>
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