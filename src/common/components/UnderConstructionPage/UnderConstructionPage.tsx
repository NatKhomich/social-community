import styles from './UnderConstructionPage.module.css'
import constructionImage from '../../image/under-construction.jpg'

export const UnderConstructionPage = () => {
    return (
        <div className={styles.root}>
            <img className={styles.img} src={constructionImage} alt='not-found-404'/>
            <h1 className={styles.title}>We are Under Maintenance.</h1>
            <p className={styles.text}>Will be Back Soon!</p>
        </div>
    );
};
