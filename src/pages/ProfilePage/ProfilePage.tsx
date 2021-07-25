import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../../components/ExploreContainer/ExploreContainer';

//Styles
import styles from './ProfilePage.module.scss';

//React import
import React from 'react';
import { createBrowserHistory } from 'history'


//Redux imports
import { useSelector , useDispatch} from "react-redux"


const ProfilePage: React.FC = () => {

  const isLogged = useSelector((state: any) => state.loggedIn);
  const dispatch = useDispatch();

  const history = createBrowserHistory();


  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Profil</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Profil</IonTitle>
          </IonToolbar>
        </IonHeader>
        <button className={styles.logoutButton} onClick={()=> {
            console.log()
            history.push("/register")
            history.go(0)
          }}>lubim ta</button>
        <ExploreContainer name="Profil page" />
      </IonContent>
    </IonPage>
  );
};

export default ProfilePage;
