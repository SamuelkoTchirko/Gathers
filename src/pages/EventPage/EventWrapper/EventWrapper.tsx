//React Imports
import React, { useEffect, useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton } from '@ionic/react';

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

    const deleteCurrent = () => {
        console.log("Attempting to delete event...")

        deleteEvent(props.id).then((value: any) => {
            console.log("Event uspesne vymazany!"+value)

        }, (reason: any) => {
            console.log("Odstranovanie eventu zlyhalo!" +reason)
        })
    }

    return(
        <>
            <div className={styles.wrapper}>
                <div className={styles.details_wrapper}>
                    <h1>{props.title}</h1>
                    <h3>{props.date_start}</h3>
                    <h3>{props.date_end}</h3>
                    <h4>Správca: {props.creator}</h4>
                    <h4>Verejný: {props.public_event ? "Áno" : "Nie"}</h4>
                </div>
                <div className={styles.right_wrapper}>
                    <button onClick={deleteCurrent}>Vymaž</button>
                </div>
            </div>
        </>
    );
};

export default EventWrapper;