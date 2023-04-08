import React from "react";
import styles from "./Sidebar.module.css"
import {AiOutlinePlus} from "react-icons/ai"

function Sidebar() {
    return <aside className={styles.sidebar}>
        <button className={styles.sidebar__btn}>
            <AiOutlinePlus />
            <span>New chat</span>
        </button>
        <ul className={styles.sidebar__history}>
            <li className={styles.history__item}>
                <p>Oh hi</p>
            </li>
        </ul>
        <div className={styles.sidebar__bottom}>
            <p>Made by marcemrze24</p>
        </div>
    </aside>
}

export default Sidebar;
