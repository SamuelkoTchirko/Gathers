import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
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


const ProfilePage: React.FC = () => {

  const isLogged = useSelector((state: any) => state.loggedIn);
  const user = JSON.parse(localStorage.getItem('user') as string);
  const dispatch = useDispatch();

  const history = createBrowserHistory();


  return (
    <IonPage>
      <IonHeader>
        <Header title={user.username}></Header>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">profil</IonTitle>
          </IonToolbar>
        </IonHeader>
        <button className={styles.logoutButton} onClick={()=> {
            if(logout()){
              dispatch({
                type: "LOGOUT",
              });
              console.log("Log out pressed")
              history.push("/register")
              history.go(0)
            }
          }}>odhlasit sa</button>
        <ExploreContainer name="Profil page" />
        <Navigation></Navigation>
      </IonContent>
    </IonPage>
  );
};

export default ProfilePage;
