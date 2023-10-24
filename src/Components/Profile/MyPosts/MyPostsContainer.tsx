import {addPostAC} from '../../../state/profileReducer';
import MyPosts from './MyPosts';
import {connect} from 'react-redux';
import {AppStateType} from '../../../state/store';
import {PostType} from './Post/Post';
import {selectProfilePosts} from '../../../state/selectors/profileSelectors';


let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        posts: selectProfilePosts(state),
    }
}

export const MyPostsContainer = connect(mapStateToProps,
    {
        addPost: addPostAC,
    })(MyPosts)

//types
export type MyPostsContainerType = MapStateToPropsType & MapDispatchToPropsType

type MapStateToPropsType = {
    posts: PostType[]
}
type MapDispatchToPropsType = {
    addPost: (newMyPostText: string) => void
}