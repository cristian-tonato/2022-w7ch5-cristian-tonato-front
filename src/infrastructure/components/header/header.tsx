import { Menu } from "../menu/menu";
import styles from "./header.module.css";

export function Header() {
    const title = "Robots🤖";
    return (
        <header className={styles.header}>
            <h1 className={styles.h1}>{title}</h1>
            <Menu></Menu>
        </header>
    );
}
