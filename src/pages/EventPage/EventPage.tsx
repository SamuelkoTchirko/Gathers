//React Imports
import React, { useEffect, useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton } from '@ionic/react';

//Styling Imports
import styles from './EventPage.module.scss';

import Navigation from "../../components/Navigation/Navigation"
import Header from "../../components/Header/Header"
import EventWrapper from "./EventWrapper/EventWrapper"

//Actions
import { getMyEvents } from "../../redux/actions/events";

interface EntryPageInterface{
    isUser: Boolean
}

const EventPage: React.FC = () => {

    const[events, setEvents] = useState<any[]>([]);

    const parseEvents = () => {
        getMyEvents().then((data: any) => {
            setEvents(data.data)
        }, (reason: any) => {
            console.log("Parsovanie eventov zlyhalo! Dovod: " +reason)
        })
    }

    useEffect(() => {
        parseEvents()
        return () => {
            setEvents([]); // This worked for me
        };
    }, [])

    return(
        <IonPage>
            <IonContent fullscreen>
                <Header title="Eventy"></Header>
                <div className={styles.wrapper}>
                    {events.map(item => (
                        <EventWrapper key={item._id} id={item._id} title={item.title} creator="You" date_start={item.date_start} date_end={item.date_end} public_event={item.public_event}></EventWrapper>
                    ))}
                </div>
                <Navigation />
            </IonContent>
        </IonPage>
    );
};

export default EventPage;