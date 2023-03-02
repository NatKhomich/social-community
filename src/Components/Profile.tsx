import React from 'react';

const Profile = () => {
    return (
        <div className={'content_profile'}>
            <div>
                <img src={'https://images.pexels.com/photos/258109/pexels-photo-258109.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}/>
            </div>
            <div>
                ava+description
                {/* <img src={'https://avatars.mds.yandex.net/i?id=e67c20f98bdc512c5d3bc20c140f8fac-5719595-images-taas-consumers&n=27&h=480&w=480'} />*/}
            </div>
            <div>
                My posts
                <div>New post</div>
            </div>
            <div>
                <div>Post 1</div>
                <div>Post 2</div>
            </div>
        </div>
    );
};

export default Profile;