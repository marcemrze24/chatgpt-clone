import Main from "../components/main/Main";
import Sidebar from "../components/sidebar/Sidebar";
import styles from "./index.module.css";

function HomePage() {
    return (
        <main>
            <Sidebar />
            <Main />
        </main>
    );
}

export default HomePage;
