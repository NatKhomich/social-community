import React, {ChangeEvent, useState} from 'react';
import TextField from '@mui/material/TextField';

type ProfileStatusType = {
    status: string
    updateStatus: (status: string) => void
    isOwner: boolean
}

export const ProfileStatus = (props: ProfileStatusType) => {

    let [editMode, setEditMode] = useState(false)
    let [newStatus, setNewStatus] = useState(props.status)

    const changeStatusHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setNewStatus(e.currentTarget.value)
    }
    const activateEditMode = () => {
        if(props.isOwner) {
            setEditMode(true)
            setNewStatus(props.status)
        }
    }
    const diActivateMode = () => {
        setEditMode(false)
        props.updateStatus(newStatus)
    }

    return editMode ? (
        <TextField
            value={newStatus}
            onChange={changeStatusHandler}
            autoFocus
            onBlur={diActivateMode}
        />
    ) : (
        <span onDoubleClick={activateEditMode}>{props.status}</span>
    )
}


// export class ProfileStatus extends React.Component<ProfileStatusType> {
//
//     state = {
//         editMode: false,
//         status: this.props.status
//     }
//
//     activateEditMode = () => {
//         this.setState({
//             editMode: true
//         })
//     }
//
//     deactivateEditMode = () => {
//         this.setState({
//             editMode: false
//         })
//         this.props.updateStatus(this.state.status)
//     }
//
//     onChangeStatus = (e: ChangeEvent<HTMLInputElement>) => {
//         this.setState({
//             status: e.currentTarget.value
//         })
//     }
//
//     componentDidUpdate(prevProps: Readonly<ProfileStatusType>, prevState: Readonly<{}>, snapshot?: any) {
//        if (prevProps.status !== this.props.status) {
//            this.setState({
//                status: this.props.status
//            })
//        }
//     }
//
//     render() {
//         return (
//             <div>
//                 {!this.state.editMode
//                     ? <span onDoubleClick={this.activateEditMode}>
//                         {this.props.status ? this.props.status : <span> no status</span>}
//                 </span>
//                     : <input autoFocus
//                              onBlur={this.deactivateEditMode}
//                              value={this.state.status}
//                              onChange={this.onChangeStatus}
//                     />
//                 }
//             </div>
//         )
//
//     }
//
// }