import styles from './styles.module.css';

export function Weather() {
    return (
        <section className={styles.container} id='planets'>
            <div className={styles.hot}>
                <span className={styles.sun}></span>
                <span className={styles.sunx}></span>
            </div>
            <div className={styles.cloudy}>
                <span className={styles.cloud}></span>
                <span className={styles.cloudx}></span>
            </div>
            <div className={styles.stormy}>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
                <span className={styles.snowe}></span>
                <span className={styles.snowex}></span>
            </div>
            <div className={styles.breezy}>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
                <span className={styles.cloudr}></span>
            </div>
            <div className={styles.night}>
                <span className={styles.moon}></span>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
        </section>
    );
}
