/* eslint-disable */

//React Imports
import React, { useDebugValue, useState, useEffect } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel, IonBadge } from '@ionic/react';
import { calendar, personCircle, map, informationCircle } from 'ionicons/icons';

import { createBrowserHistory } from 'history'

//Styling Imports
import styles from './NotificationTabPage.module.scss';

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
import { Number } from 'mongoose';

import { getRequests, acceptRequest } from "../../../redux/actions/friends";
import { request } from 'http';


interface I_NotificationPage{
    option: number
}

const NotificationTabPage: React.FC<I_NotificationPage> = (props) => {

    const current_id = JSON.parse(localStorage.getItem("user")as any).id;

    const history = createBrowserHistory();

    const [page, setPage] = useState(0);
    const [requests, setRequests] = useState<any[]>([]);

    useEffect(() => {
        getFriendRequests() 
    }, [])

    useEffect(() => {
        console.log(requests + " requesty")
    }, [requests])

    const getFriendRequests = () => {
        console.log("Attempting query users")

        getRequests().then((data: any) => {
            setRequests(data.data)
        }, (reason: any) => {
            console.log("Requesty zlyhali " +reason)
        })
    }

    const handleRequestAccept = (request_id: String) => {
        console.log("Attempting request accept")

        acceptRequest(request_id).then((data: any) => {
            console.log("Request uspesne potvrdeny")
            history.push("/notifications")
            history.go(0)
        }, (reason: any) => {
            console.log("Potrvdenie requestu zlyhalo " +reason)
        })
    }


    function PeopleNotifications(): JSX.Element {
        return (
            
            <div className={styles.wrapper}>

                {requests.map(item => (
                    <>
                        <div className={styles.notification_wrapper}>
                            <div className={styles.notification}>
                                <p>{item.username}</p>
                                <button className={styles.accept_button} onClick={() => {
                                    handleRequestAccept(item.request_id)
                                }}>Prijať</button>
                                <button className={styles.decline_button}>Odmietnuť</button>
                            </div>
                        </div>
                    </>
                ))}

            </div>
            
        );
    }
      
    function EventNotifications(): JSX.Element {
        return (
                <div className={styles.wrapper}>
                <h1>sadas</h1>
            </div>
        );
    }

    function OtherNotifications(): JSX.Element {
        return (
            <div className={styles.wrapper}>
                <h1>Ostatné</h1>
            </div>
        );
    }

    function RenderNotifications(props: any): JSX.Element{
        if (props.option == 0) {    
            return (
                <><PeopleNotifications /></>
            );  
        } else if(props.option == 1){
            return (<><EventNotifications /></>);
        } else if(props.option == 2){
            return (<><OtherNotifications /></>);
        } else{
            return (
                <><EventNotifications /></>
            );
        }

    }

    return(
        <>
            {<RenderNotifications option={props.option} />}
        </>
    ); 
};

export default NotificationTabPage;

/* eslint-enable */