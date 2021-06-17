import React, { useState } from 'react';
import { IonButton, IonGrid, IonCol, IonRow, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonInput, IonItem, IonLabel, IonList, IonItemDivider } from '@ionic/react';
import styles from './RegisterForm.module.scss';

const RegisterForm: React.FC = () => {

  const [text, setText] = useState<string>();
  const [number, setNumber] = useState<number>();

  return (
    <IonPage>
      <IonContent>
        <IonGrid>
          <IonRow className={styles.upperPadding}>
            
          </IonRow>
          <IonRow>
            <IonCol>

            </IonCol>
            <IonCol size="10">
              <IonItem>
                <IonLabel position="floating">Pouzivatelske Meno</IonLabel>
                <IonInput value={text}></IonInput>
              </IonItem>
            </IonCol>
            <IonCol>

            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>

            </IonCol>
            <IonCol size="10">
              <IonItem>
                <IonLabel position="floating">Heslo</IonLabel>
                <IonInput type="password" value={text}></IonInput>
              </IonItem>
            </IonCol>
            <IonCol>

            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>

            </IonCol>
            <IonCol size="10">
              <IonItem>
                <IonLabel position="floating">Zopakuj Heslo</IonLabel>
                <IonInput type="password" value={text}></IonInput>
              </IonItem>
            </IonCol>
            <IonCol>

            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol></IonCol>
            <IonCol size="4">
              <br />
              <br />
              <IonButton expand="block" fill="outline">Zaregistruj Sa</IonButton>
            </IonCol>
            <IonCol></IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default RegisterForm;
