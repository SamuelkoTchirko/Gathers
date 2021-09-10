import styles from './Header.module.scss';
import React from 'react';


interface I_Header{
    title: string
}

const Header: React.FC<I_Header> = (props) => {
  return (
    <>
        <div className={styles.upper}>
            <h1 className={styles.title}>{props.title}</h1>
        </div>
    </>
  );
};

export default Header;