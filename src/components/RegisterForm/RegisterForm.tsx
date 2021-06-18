import React, { useEffect, useState } from 'react';
import { IonButton, IonGrid, IonCol, IonRow, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonInput, IonItem, IonLabel, IonList, IonItemDivider } from '@ionic/react';
import styles from './RegisterForm.module.scss';
import axios from "axios"

const RegisterForm: React.FC = () => {

  const [text, setText] = useState<string>();
  const [number, setNumber] = useState<number>();

  const [nickname, setNickname] = useState("");
  const [password, setPassword] = useState("");
  const [secpassword, setSecPassword] = useState("");

  const handleSubmit = () =>{
    console.log("Submitting")

    if(password == secpassword){
      fetch('http://localhost:8110/users', {
      method: 'POST',
      headers: {
        "Content-type": "application/json",
        "Access-Control-Allow-Origin": "*"
      },
      body: JSON.stringify({
        nickname: nickname, 
        password: password
      })
      }).then(res => {
        return res.json()
      }).then(data=> console.log("ezpz"))
      .catch(error => console.log(error))
    }else{
      console.log("Hesla sa nezhoduju")
    }

    //event.preventDefault();

  }

  /*useEffect(()=>{
    console.log(nickname)
  }, [nickname])*/

  return (
    <IonPage>
      <IonContent>
        <form onSubmit={handleSubmit}>
        <IonGrid>
          <IonRow className={styles.upperPadding}>
            
          </IonRow>
          <IonRow>
            <IonCol>

            </IonCol>
            <IonCol size="10">
              <IonItem>
                <IonLabel position="floating">Pouzivatelske Meno</IonLabel>
                <IonInput name="nickname" onIonInput={(e: any) => setNickname(e.target.value)}></IonInput>
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
                <IonInput type="password" onIonInput={(e: any) => setPassword(e.target.value)}></IonInput>
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
                <IonInput type="password" onIonInput={(e: any) => setSecPassword(e.target.value)}></IonInput>
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
              <IonButton onClick={handleSubmit} type="submit" expand="block" fill="outline">Zaregistruj Sa</IonButton>
            </IonCol>
            <IonCol></IonCol>
          </IonRow>
        </IonGrid>
        </form>
      </IonContent>
    </IonPage>
  );
};

export default RegisterForm;
