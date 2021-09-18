//React Imports
import React, { useDebugValue, useState, useEffect } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton } from '@ionic/react';

import { createBrowserHistory } from 'history'

//Styling Imports
import styles from './NewEventPage.module.scss';

import Navigation from "../../components/Navigation/Navigation"
import Header from "../../components/Header/Header"

/* eslint-disable */
// @ts-ignore
import DatePicker from "react-datepicker";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
/* eslint-enable */

import "react-datepicker/dist/react-datepicker.css";

//Redux
import { useSelector , useDispatch} from "react-redux"

//Actions
import { create } from "../../redux/actions/events";

interface EntryPageInterface{
    isUser: Boolean
}

const NewEventPage: React.FC = () => {

    const history = createBrowserHistory();

    const [title, setTitle] = useState("");
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [public_event, setPublic] = useState(false);

    const handleCreate = () => {
        console.log("Attempting event creation")

        create(title, startDate, endDate, public_event).then((value: any) => {
            //console.log(value)
        }, (reason: any) => {
            console.log("Pridavanie eventu zlyhalo!" +reason)
        }).then(() => {
            history.push("/events")
            history.go(0)
        })

    }

    return(
        <IonPage>
            <IonContent fullscreen>
                <Header title="Nový event"></Header>
                <div className={styles.content_wrapper}>
                    <div className={styles.form_wrapper}>
                        <label className={styles.field}>
                            <input type="text" placeholder=" " onChange={(e: any) => setTitle(e.target.value)}/>
                            <span className={styles.placeholder}>Názov eventu</span>
                        </label>
                        <div className={styles.start_input}>
                            <DatePicker selected={startDate} onChange={(date: any) => setStartDate(date)} />
                        </div>
                        <div className={styles.end_input}>
                            <DatePicker selected={endDate} onChange={(date: any) => setEndDate(date)} />
                        </div>
                        <FormControlLabel className={styles.checkbox_wrapper}
                            control={<Checkbox className={styles.checkbox} onChange={()=>{setPublic(!public_event)}} name="checkbox" />}
                            label="Verejný event"
                        />
                        <button className={styles.button} type="button" onClick={handleCreate}>Vytvor event</button>
                    </div>
                </div>
                <Navigation />
            </IonContent>
        </IonPage>
    );
};

export default NewEventPage;