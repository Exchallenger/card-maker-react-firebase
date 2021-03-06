import Card from 'components/card/card';
import React, { useState } from 'react';
import styles from "./editor.module.css";

const Editor = (props) => {
    const [cards, setCards] = useState([]);
    const onCardMaker = () => {
        //받아온 정보를 preview에 추가한다
    }

    const onAdd = () => {
        setCards([...cards,<Card key={Date.now()}/>]);
        const kk = cards.map(card => card.key)
        }
    const Deleteitem = (id) =>{
        
    }
    console.log(cards);
    console.log(kk);
    return(  
        <div className={styles.div}>
            <h1 className={styles.title}>Card Maker</h1>
            <Card onCardMaker={onCardMaker} Deleteitem={Deleteitem} key={Date.now}/>
            {cards}
            <button onClick={onAdd} className={styles.plusBtn}><i className="fas fa-plus-circle"></i></button>
        </div>

    );
}
            
    
export default Editor;