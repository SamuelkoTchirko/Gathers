//React Imports
import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton } from '@ionic/react';

//Styling Imports
import styles from './EntryPage.module.scss';

interface EntryPageInterface{
    isUser: Boolean
}

const EntryPage: React.FC<EntryPageInterface> = () => {
    return(
        <IonPage>
            <IonContent fullscreen>
                <div className={styles.upper}>
                    <IonTitle>Vitaj v aplikacii Gathers</IonTitle>
                </div>
                <div className={styles.middle}>
                    <IonButton expand="block">Block Button</IonButton>
                </div>
                <div className={styles.lower}>

                </div>
            </IonContent>
        </IonPage>
    );
};

export default EntryPage;