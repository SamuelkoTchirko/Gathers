import styles from './Header.module.scss';
import React from 'react';

//Images
import Zoom from '../../assets/png/zoom.png'; 


interface I_Header{
    title: string
}

const Header: React.FC<I_Header> = (props) => {
  return (
    <>
        <div className={styles.header}>
          <div className={styles.svg_wrapper}>
            <svg viewBox="0 0 500 500" preserveAspectRatio="xMinYMin meet">
              <path d="M0,100 C150,200 350,0 500,100 L500,00 L0,0 Z"></path>
            </svg>
          </div>
          <h1>{props.title}</h1>
        </div>
    </>
  );
};

export default Header;