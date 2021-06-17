import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonInput, IonItem, IonLabel, IonList, IonItemDivider } from '@ionic/react';
import styles from './LoginForm.module.scss';

const LoginForm: React.FC = () => {

  const [text, setText] = useState<string>();
  const [number, setNumber] = useState<number>();

  return (
    <IonPage>
      <IonContent>
          <IonItem className={styles.nickname}>
            <IonLabel position="fixed">Login</IonLabel>
            <IonInput value="Epic"></IonInput>
          </IonItem>
      </IonContent>
    </IonPage>
  );
};

export default LoginForm;
