import styles from './NotFound404.module.css'
import NotFound404Images from '../../image/404.jpg'

export const NotFound404 = () => {
    return (
        <div className={styles.root}>
            <img className={styles.img} src={NotFound404Images} alt='not-found-404'/>
            <h1 className={styles.title}>Oops, something went wrong.</h1>
        </div>
    );
};

