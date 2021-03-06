import React, { useRef } from 'react';
import styles from "./card.module.css";

const Card = ({onCardMaker}) => {
    const formRef = useRef();
    const onSubmit = (event) =>{
        event.preventDefault();
        onCardMaker();
    }
    return(
    <form className={styles.form}>
                <table border="1" className={styles.table}>
            <tr>
                <th>
                    <input type="text" placeholder="title"/>
                </th>
                <th>
                    <input type="text" placeholder="company"/>
                </th>
                <th>
                    <select name="Color">
                        <option value="Dark">Dark</option>
                        <option value="Pink">Pink</option>
                        <option value="SkyBlue">SkyBlue</option>
                    </select>
                </th>
            </tr>
            <tr>
                <th>
                    <input type="text" placeholder="job"/>
                </th>
                <th colSpan="2" >
                    <input type="text" placeholder="email"/>
                </th>
            </tr>
            <tr width="100%">
                <th colSpan="3">
                    <input type="text" placeholder="content"/>
                </th>
            </tr>
            <tr>
                <th colSpan="1">
                    <input type="text" placeholder="name"/>
                </th>
                <th colSpan="1">
                    <button className={styles.btn}>
                        Delete
                    </button>
                </th>
                <th colSpan="1">
                    <button onClick={onSubmit} className={styles.subBtn}>Submit</button>
                </th>
            </tr>
        </table>
    </form>);
}
            
export default Card;