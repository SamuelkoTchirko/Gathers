//React Imports
import React, { useEffect, useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton } from '@ionic/react';

import { createBrowserHistory } from 'history'

import SportIcon from "../../../assets/png/sport.png";

//Styling Imports
import styles from './EventWrapper.module.scss';

//Actions
import { deleteEvent } from "../../../redux/actions/events";

interface I_EventWrapper{
    id: Number,
    title: String,
    creator: String,
    date_start: Date,
    date_end: Date,
    public_event: Boolean
}

const EventWrapper: React.FC<I_EventWrapper> = (props) => {

    const history = createBrowserHistory();

    const deleteCurrent = () => {
        console.log("Attempting to delete event...")

        deleteEvent(props.id).then((value: any) => {
            console.log("Event uspesne vymazany!"+value)

        }, (reason: any) => {
            console.log("Odstranovanie eventu zlyhalo!" +reason)
        }).then(() => {
            history.push("/events")
            history.go(0)
        })
    }

    return(
        <>
            <div className={styles.wrapper}>
                <img className={styles.icon} src={SportIcon} alt="" />
                <div className={styles.details_wrapper}>
                    <ul>
                        <li><h1>{props.title}</h1></li>
                        <li><h4>{props.public_event ? "Verejný" : "Súkromný"}</h4></li>
                        <li><h4>Správca: {props.creator}</h4></li>
                    </ul>
                </div>
                <div className={styles.right_wrapper}>
                    <button onClick={deleteCurrent}>X</button>
                </div>
            </div>
        </>
    );
};

export default EventWrapper;