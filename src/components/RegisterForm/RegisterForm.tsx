import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonInput, IonItem, IonLabel, IonList, IonItemDivider } from '@ionic/react';
import styles from './RegisterForm.module.scss';

const RegisterForm: React.FC = () => {

  const [text, setText] = useState<string>();
  const [number, setNumber] = useState<number>();

  return (
    <IonPage>
      <IonContent>
          <IonItem className={styles.nickname}>
            <IonLabel position="fixed">Register</IonLabel>
            <IonInput value="Epic"></IonInput>
          </IonItem>
      </IonContent>
    </IonPage>
  );
};

export default RegisterForm;
