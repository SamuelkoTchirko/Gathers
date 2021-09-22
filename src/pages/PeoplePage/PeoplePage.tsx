//React Imports
import React, { useEffect, useState }  from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton } from '@ionic/react';

import { createBrowserHistory } from 'history'

//Styling Imports
import styles from './PeoplePage.module.scss';

import Navigation from "../../components/Navigation/Navigation"
import Header from "../../components/Header/Header"

import { findByUsername } from "../../redux/actions/users";
import { createRequest } from "../../redux/actions/friends";

interface PeoplePageInterface{
    isUser: Boolean
}

const PeoplePage: React.FC = () => {

    const history = createBrowserHistory();

    const [query, setQuery] = useState("");
    const[users, setUsers] = useState<any[]>([]);

    useEffect(() => {
        console.log(users)
    }, [users])

    const handleQuery = () => {
        console.log("Attempting query users")

        findByUsername(query).then((data: any) => {
            const current_id = JSON.parse(localStorage.getItem("user")as any).id;

            setUsers(data.data)
        }, (reason: any) => {
            console.log("Vyhladavanie zlyhalo" +reason)
        })
    }

    const handleFriendRequest = (id: any) => {
        console.log("Sending friend request...")

        //const current_id = JSON.parse(localStorage.getItem("user")as any).id;

        createRequest(id).then((data: any) => { 
            if(data){
                console.log("Request poslany")
            }
        }, (reason: any) => {
            console.log("Request zlyhal: " +reason)
        })
    }

    return(
        <IonPage>
            <IonContent fullscreen>
                <div className={styles.wrapper}>
                    
                </div>
            </IonContent>
        </IonPage>
    );
};

export default PeoplePage;