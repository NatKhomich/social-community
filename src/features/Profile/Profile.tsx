import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import styles from './Profile.module.css'
import {ProfileResponseType} from './profileReducer';
import {Sidebar} from "./Sidebar/Sidebar";
import {UpdateProfileType} from "../../api/profileApi";
import {PostHeader} from "./Posts/Post/PostHeader/PostHeader";
import {DataTextFormType, TextForm} from "../../common/components/TextForm/TextForm";
import {Posts} from "./Posts/Posts";
import {PostType} from "./Posts/Post/Post";
import {UsersResponseType} from "../Users/usersReducer";

type ProfilePropsType = {
    profile: ProfileResponseType | null
    status: string
    updateStatus: (status: string) => void
    updateProfile: (profile: UpdateProfileType) => Promise<any>
    isOwner: boolean
    savePhoto: (file: File) => void
    addPost: (newMyPostText: string) => void
    posts: PostType[]
    userItems: UsersResponseType[]
}

const Profile = React.memo((props: ProfilePropsType) => {
    const {profile, updateProfile, updateStatus, status, isOwner, savePhoto, userItems} = props

    const addPostHandler = (text: DataTextFormType) => {
        if (text.text !== '')
            props.addPost(text.text)
    }

    return (
        <section className={styles.root}>
            <div className={styles.content}>

                <ProfileInfo profile={profile}
                             savePhoto={savePhoto}
                             isOwner={isOwner}
                             status={status}
                             updateStatus={updateStatus}/>


                <div className={styles.items}>
                    <div className={styles.posts}>
                        <div className={styles.postForm}>
                            <div className={styles.textareaAndButton}>
                                <PostHeader profile={props.profile}/>
                                <TextForm callback={addPostHandler} name={'Add post'}/>
                            </div>
                        </div>
                        <Posts profile={profile} posts={props.posts} />
                    </div>
                        <Sidebar profile={profile}
                                 updateProfile={updateProfile}
                                 isOwner={isOwner}
                                 userItems={userItems}
                        />
                </div>

            </div>
        </section>
    );
});

export default Profile;