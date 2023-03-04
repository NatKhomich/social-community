import React from 'react';
import s from './Post.module.css';


const Post = () => {
    return (
        <div className={s.item}>
                <img
                    src={'https://st.depositphotos.com/1779253/5140/v/600/depositphotos_51401141-stock-illustration-male-avatar-profile-picture-use.jpg'}/>
            Post 1
            <span> Like! </span>
        </div>
    );
};

export default Post;