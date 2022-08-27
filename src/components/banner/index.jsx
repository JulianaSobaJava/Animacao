import styles from "./styles.module.css";

export function Banner() {
  return (
      <div className={styles.container} id='home'>
          <div className={styles.lua}>
              <div className={styles.foguete}>
                   <img src='./foguete.png' alt='foguete' /> 
              </div>
          </div>
      </div>
  );
}
