import Card from 'components/card/card';
import React, { useState } from 'react';
import styles from "./editor.module.css";

const Editor = (props) => {
    const onCardMaker = () => {
        //받아온 정보를 preview에 추가한다
    }
    const onPlus = () =>{
        const [cards, setCards] = useState([]);
        setCards([...cards,<Card/>]);
    }

    return(  
        <div className={styles.div}>
            <h1 className={styles.title}>Card Maker</h1>
            <Card onCardMaker={onCardMaker}/>
            {cards}
            <button onClick={onPlus} className={styles.plusBtn}><i className="fas fa-plus-circle"></i></button>
        </div>

    );
}
            
    
export default Editor;