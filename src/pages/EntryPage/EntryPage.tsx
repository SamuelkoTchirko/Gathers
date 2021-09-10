//React Imports
import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton } from '@ionic/react';

//Styling Imports
import styles from './EntryPage.module.scss';

import Navigation from "../../components/Navigation/Navigation"
import Header from "../../components/Header/Header"

interface EntryPageInterface{
    isUser: Boolean
}

const EntryPage: React.FC<EntryPageInterface> = () => {
    return(
        <IonPage>
            <IonContent fullscreen>
                <Header title={"Gathers"}></Header>
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

export default EntryPage;