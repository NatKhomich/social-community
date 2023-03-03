import React from 'react';
import classes from './Profile.module.css';

const Profile = () => {
    return (
        <div className={classes.content}>
            <div>
                <img src={'https://interier-foto.ru/wp-content/uploads/dlinnye-foto-4.jpg'}/>
            </div>
            <div>
                ava+description
                {/* <img src={'https://avatars.mds.yandex.net/i?id=e67c20f98bdc512c5d3bc20c140f8fac-5719595-images-taas-consumers&n=27&h=480&w=480'} />*/}
            </div>
            <div>
                <div>New post</div>
            </div>
            <div className={classes.posts}>
                <div className={ `${classes.item} ${classes.active}`}>Post 1</div>
                <div className={classes.item}>Post 2</div>
            </div>
        </div>
    );
};

export default Profile;