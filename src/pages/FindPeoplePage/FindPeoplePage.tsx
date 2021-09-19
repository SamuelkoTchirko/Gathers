//React Imports
import React, { useEffect, useState }  from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton } from '@ionic/react';

import { createBrowserHistory } from 'history'

//Styling Imports
import styles from './FindPeoplePage.module.scss';

import Navigation from "../../components/Navigation/Navigation"
import Header from "../../components/Header/Header"

import { findByUsername } from "../../redux/actions/users";
import { createRequest } from "../../redux/actions/friends";

interface FindPeoplePageInterface{
    isUser: Boolean
}

const FindPeoplePage: React.FC = () => {

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
                    <button className={styles.back_button} type="button" onClick={() => {
                        history.push("/profile")
                        history.go(0)
                    }}>Späť</button>
                    <div className={styles.input_wrapper}>
                        <h3>Meno:</h3>
                        <input type="text" placeholder=" " onChange={(e: any) => setQuery(e.target.value)}/>
                    </div>
                    <button className={styles.query_button} type="button" onClick={handleQuery}>Hľadaj</button>
                    <div className={styles.results_wrapper}>
                    {users.map(item => (
                        <div className={styles.result}>
                            <h2 key={item._id}>{item.username}</h2>
                            {
                                (() => {
                                    if(item.confirmed == null){
                                        return <button className={styles.add_button} type="button" onClick={() => handleFriendRequest(item._id)}>Pridať</button>
                                    }else if(item.confirmed == false){
                                        return <button className={styles.add_button_pending} type="button">Čakajúca žiadosť</button>
                                    }else if(item.confirmed == true){
                                        return <button className={styles.add_button_confirmed} type="button">Priatelia</button>
                                    }
                                })()
                            }
                        </div>
                    ))}
                    </div>
                </div>
            </IonContent>
        </IonPage>
    );
};

export default FindPeoplePage;