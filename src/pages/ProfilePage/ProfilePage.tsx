import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton } from '@ionic/react';
import ExploreContainer from '../../components/ExploreContainer/ExploreContainer';

//Styles
import styles from './ProfilePage.module.scss';

//React import
import React from 'react';
import { createBrowserHistory } from 'history'


//Redux imports
import { useSelector , useDispatch} from "react-redux"

//Components
import Header from "../../components/Header/Header"
import Navigation from "../../components/Navigation/Navigation"

//Actions
import { logout } from "../../redux/actions/auth";

//Images
import default_avatar from '../../assets/png/img_avatar.png'; 


const ProfilePage: React.FC = () => {

  const isLogged = useSelector((state: any) => state.loggedIn);
  const user = JSON.parse(localStorage.getItem('user') as string);
  const dispatch = useDispatch();

  const history = createBrowserHistory();


  return (
    <IonPage>
      <IonHeader>
        <Header title="Profil"></Header>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">profil</IonTitle>
          </IonToolbar>
        </IonHeader>
        <div className={styles.content_wrapper}>
          <div className={styles.info_wrapper}>
            <h2 className={styles.username} ><strong>{user.username}</strong></h2>
            <h4 className={styles.email} >{user.email}</h4>
          </div>
          <IonButton className={styles.logout_button}onClick={() => {
            if(logout()){
              dispatch({
                type: "LOGOUT",
              });
              console.log("Log out pressed")
              history.push("/register")
              history.go(0)
            }
          }} color="#FF7B00" fill="outline" expand="block">Odhlásiť sa</IonButton>

        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <Navigation></Navigation>
      </IonContent>
    </IonPage>
  );
};

export default ProfilePage;
