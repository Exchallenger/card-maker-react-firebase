import React from 'react';
import { useHistory } from 'react-router-dom';
import { firebaseInstance } from 'service/firebase';
import imgfile from "../img/logo.png";
import styles from "./main.module.css";

const Main = (props) => {
    const history = useHistory();
    const onLogOut = () =>{
        firebaseInstance.auth().signOut();
        history.push({
            pathname:"/"
        })

    }

    return(
        <>
            <button className={styles.btn} onClick={onLogOut}>Log out</button>
            <div className={styles.header}>
                <img className={styles.img} src={imgfile} alt="logo"/>
                <div className={styles.title}>Business Card Maker</div>
            </div>
            <section className={styles.main}>
                Halo
            </section>
            <footer className={styles.footer}>
                &copy; Exchallenger 2020.12
            </footer>
        </>
    )
};
            
   

export default Main;