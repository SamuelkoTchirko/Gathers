//React Imports
import React, { useEffect, useState }  from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton } from '@ionic/react';

//Styling Imports
import styles from './FindPeoplePage.module.scss';

import Navigation from "../../components/Navigation/Navigation"
import Header from "../../components/Header/Header"

import { findByUsername } from "../../redux/actions/users";

interface FindPeoplePageInterface{
    isUser: Boolean
}

const FindPeoplePage: React.FC = () => {

    const [query, setQuery] = useState("");
    const[users, setUsers] = useState<any[]>([]);

    useEffect(() => {
        console.log(users)
    }, [users])

    const handleQuery = () => {
        console.log("Attempting query users")

        findByUsername(query).then((data: any) => {
            setUsers(data.data)
        }, (reason: any) => {
            console.log("Vyhladavanie zlyhalo" +reason)
        })
    }

    return(
        <IonPage>
            <IonContent fullscreen>
                <div className={styles.wrapper}>
                    <div className={styles.input_wrapper}>
                        <h3>Meno:</h3>
                        <input type="text" placeholder=" " onChange={(e: any) => setQuery(e.target.value)}/>
                    </div>
                    <button type="button" onClick={handleQuery}>Hľadaj</button>
                    <div>
                    {users.map(item => (
                        <h2 key={item._id}>{item.username}</h2>
                    ))}
                    </div>
                </div>
            </IonContent>
        </IonPage>
    );
};

export default FindPeoplePage;