//React Imports
import React, { useDebugValue, useState, useEffect } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel, IonBadge } from '@ionic/react';
import { calendar, personCircle, map, informationCircle } from 'ionicons/icons';

import { createBrowserHistory } from 'history'

//Styling Imports
import styles from './NotificationPage.module.scss';

import Navigation from "../../components/Navigation/Navigation"
import Header from "../../components/Header/Header"
import NotificationTabPage from "./NotificationTabPage/NotificationTabPage"

/* eslint-disable */
// @ts-ignore
import DatePicker from "react-datepicker";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
/* eslint-enable */

import { ReactComponent as PeopleIcon } from '../../assets/svg/people-circle-outline.svg';
import { ReactComponent as EventsIcon } from '../../assets/svg/calendar-outline.svg';
import { ReactComponent as InfoIcon } from '../../assets/svg/information-circle-outline.svg';

import "react-datepicker/dist/react-datepicker.css";

//Redux
import { useSelector , useDispatch} from "react-redux"

//Actions
import { create } from "../../redux/actions/events";

interface EntryPageInterface{
    isUser: Boolean
}

const NotificationPage: React.FC = () => {

    const history = createBrowserHistory();

    const [page, setPage] = useState(0);



    useEffect(() => {
        
    }, [])


    return(
        <IonPage>
            <IonContent fullscreen>
                <div className={styles.content_wrapper}>
                    <div className={styles.tabs_header}>
                        <h2>Notifikácie</h2>
                    </div>
                    <div className={styles.tabs}>
                        
                            <button onClick={() => {
                                setPage(0)
                            }} className={page == 0 ? styles.tab_active : styles.tab}>
                                {/*<PeopleIcon className={styles.icon}></PeopleIcon>*/}
                                <p>Ľudia</p>
                            </button>

                            <button onClick={() => {
                                setPage(1)
                            }} className={page == 1 ? styles.tab_active : styles.tab}>
                                {/*<EventsIcon className={styles.icon}></EventsIcon>*/}
                                <p>Eventy</p>
                            </button>

                            <button onClick={() => {
                                setPage(2)
                            }} className={page == 2 ? styles.tab_active : styles.tab}>
                                {/*<InfoIcon className={styles.icon}></InfoIcon>*/}
                                <p>Aplikácia</p>
                            </button>
                    </div>
                    <NotificationTabPage option={page}></NotificationTabPage>
                </div>
                <Navigation />
            </IonContent>
        </IonPage>
    ); 
};

export default NotificationPage;