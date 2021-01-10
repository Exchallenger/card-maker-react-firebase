import React, { useRef, useState } from 'react';
import styles from './image_file_input.module.css';

const ImageFileInput = ({imageUploader,name, onFileChange}) =>{
    const [loading, setLoading] = useState(false);

    const inputRef = useRef();
    const onButtonClick = (event) =>{
        event.preventDefault();
        inputRef.current.click();
    };
    const onChange = async event =>{
        setLoading(true);
        console.log(event.target.files[0]);
        const uploaded= await imageUploader.upload(event.target.files[0]);
        setLoading(false);
        onFileChange({
            name:uploaded.original_filename,
            url:uploaded.url
        })
    }

    return(
        <div className={styles.container}>
            <input 
            ref={inputRef} 
            className={styles.input} 
            type="file"
            accept="image/*" 
            name="file"
            onChange={onChange}
            />
            {false && <button className={styles.button} onClick={onButtonClick}>
                {name || "No File"}
            </button>}
            {true && <div className={styles.loading}></div>}
        </div>
    );
}

export default ImageFileInput;