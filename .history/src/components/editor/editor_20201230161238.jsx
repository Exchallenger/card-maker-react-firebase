import React from 'react';
import styles from "./editor.module.css";

const Editor = (props) => {
    return(
        <table>
            <tr>
                <th>
                    <input type="text" value="title"/>
                </th>
                <th>
                    <input type="text" value="company"/>
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
                    <input type="text" value="job"/>
                </th>
                <th>
                    <input type="text" value="email"/>
                </th>
            </tr>
            <tr>
                <th>
                    <input type="text" value="content"/>
                </th>
            </tr>
            <tr>
                <th colSpan="1.5">
                    <input type="text" value/>
                </th>
                <th colSpan="1.5">
                    <button>
                        Delete
                    </button>
                </th>
            </tr>
        </table>
    );
}
            
    
export default Editor;

{/* <section className={styles.section}>
<h1 className={styles.title}>Card Maker</h1>
<form className="form">
    <div className={styles.my1}>
        <span>jihun</span>
        <span>Samsung</span>
        <select name="Color">
            <option value="Dark">Dark</option>
            <option value="Pink">Pink</option>
            <option value="SkyBlue">SkyBlue</option>
        </select>
    </div>
    <div className={styles.my2}>
        <span>Softengineer</span>
        <span>q@naver.com</span>
    </div>
    <div className={styles.my3}>
        <input type="text" value="hi"/>
    </div>
    <div className={styles.my4}>
        <button>anna</button>
        <button>Delete</button>
    </div>
</form>
</section> */}