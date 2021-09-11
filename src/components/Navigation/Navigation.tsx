import styles from './Navigation.module.scss';
import React from 'react';

//Icons
import { ReactComponent as HomeIcon } from "../../assets/svg/home.svg";
import { ReactComponent as CalendarIcon } from "../../assets/svg/calendar.svg";
import { ReactComponent as ProfileIcon } from "../../assets/svg/user-1.svg";
//import { ReactComponent as HomeIcon } from "../../assets/svg/009-home.svg";


const Navigation: React.FC = () => {
  return (
    <>
        <div className={styles.wrapper}>
          <div className={styles.icons}>
            <a href="/"><HomeIcon className={styles.icon}></HomeIcon></a>
            <a href="/events"><CalendarIcon className={styles.icon}></CalendarIcon></a>
            <a href="/profile"><ProfileIcon className={styles.icon}></ProfileIcon></a>
          </div>
        </div>
    </>
  );
};

export default Navigation;