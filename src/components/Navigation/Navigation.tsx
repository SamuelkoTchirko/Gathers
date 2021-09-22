import styles from './Navigation.module.scss';
import React from 'react';

import { createBrowserHistory } from 'history'

import { IonContent, IonHeader, IonFooter, IonPage, IonTitle, IonToolbar, IonFab, IonFabButton, IonIcon, IonFabList } from '@ionic/react';
import { add, settings, share, arrowForwardCircle, arrowBackCircle, arrowUpCircle, logoVimeo, logoFacebook, logoInstagram, logoTwitter, person } from 'ionicons/icons';

//Icons
import HomeIcon from "../../assets/png/020-home.png";
import CalendarIcon from "../../assets/png/035-calendar.png";
import ProfileIcon from "../../assets/png/003-user.png";
import SettingsIcon from "../../assets/png/029-settings.png";
import AddIcon from "../../assets/png/036-add.png";

import { ReactComponent as AddFriendIcon } from '../../assets/svg/person-add-outline.svg';

import HomeIconActive from "../../assets/png/020-home-active.png";
import CalendarIconActive from "../../assets/png/035-calendar-active.png";
import ProfileIconActive from "../../assets/png/003-user-active.png";
import SettingsIconActive from "../../assets/png/029-settings-active.png";

//React imports
import { useLocation} from 'react-router-dom';


const Navigation: React.FC = () => {

  const history = createBrowserHistory();

  const location = useLocation();

  return (
    <>
        <div className={styles.wrapper}>
          <div className={styles.icons}>
            {location.pathname == "/" ||  location.pathname == "/home" ? 
              <a href="/"><img className={styles.home_icon} src={HomeIconActive} alt="" /></a>
              :
              <a href="/"><img className={styles.home_icon} src={HomeIcon} alt="" /></a>
            }
            {location.pathname != "/events" ? 
              <a href="/events"><img className={styles.events_icon} src={CalendarIcon} alt="" /></a>
              :
              <a href="/events"><img className={styles.events_icon} src={CalendarIconActive} alt="" /></a>
            }
            {/*-- fab placed in the center of the content with a list on each side --*/}
            <div className={styles.add_wrapper}>
            <IonFab className={styles.add_icon} vertical="center" horizontal="center" slot="fixed">
                <IonFabButton color="warning" className={styles.add_button}>
                  <IonIcon icon={add} />
                </IonFabButton>
              <IonFabList side="top">
                <IonFabButton onClick={() => {
                  history.push("/people")
                  history.go(0)
                }}><AddFriendIcon className={styles.icon}></AddFriendIcon></IonFabButton>
                <IonFabButton onClick={() => {
                  history.push("/event/new")
                  history.go(0)
                }}><AddFriendIcon className={styles.icon}></AddFriendIcon></IonFabButton>
              </IonFabList>
            </IonFab>
            </div>
            {location.pathname != "/profile" ? 
              <a href="/profile"><img className={styles.profile_icon} src={ProfileIcon} alt="" /></a>
              :
              <a href="/profile"><img className={styles.profile_icon} src={ProfileIconActive} alt="" /></a>
            }
            {location.pathname != "/settings" ? 
              <a href="/settings"><img className={styles.settings_icon} src={SettingsIcon} alt="" /></a>
              :
              <a href="/settings"><img className={styles.settings_icon} src={SettingsIcon} alt="" /></a>
            }
          </div>
        </div>
    </>
  );
};

export default Navigation;