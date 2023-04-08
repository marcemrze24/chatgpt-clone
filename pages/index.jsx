import Main from "../components/main/Main";
import Sidebar from "../components/sidebar/Sidebar";
import styles from "./Index.module.css";

function HomePage() {
    return (
        <main className={styles.main}>
            <Sidebar />
            <Main />
        </main>
    );
}

export default HomePage;
