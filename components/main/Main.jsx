import React from "react";
import { AiOutlineSend, AiOutlinePlus } from "react-icons/ai";

function Main() {
    return (
        <section className={styles.main}>
            <h1 className={styles.main__title}>Marce GPT</h1>
            <ul className={styles.main__feed}>
                <li className={styles.feed__message}>
                    <p>I like burritos.</p>
                </li>
            </ul>
            <div className={styles.main__bottom}>
                <div className={styles.bottom__inputContainer}>
                    <input type="text" />
                    <div id="submit">
                        <AiOutlineSend />
                    </div>
                </div>
                <p className={styles.bottom__info}>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Dignissimos eum aperiam similique ab tempore recusandae sed
                    quis officiis nemo non!
                </p>
            </div>
        </section>
    );
}

export default Main;
