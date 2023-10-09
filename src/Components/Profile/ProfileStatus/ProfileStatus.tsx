import React, {ChangeEvent} from 'react';

type ProfileStatusType = {
    status: string
    updateStatus: (status: string) => void
}

export class ProfileStatus extends React.Component<ProfileStatusType> {

    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }

    deactivateEditMode = () => {
        this.setState({
            editMode: false
        })
        this.props.updateStatus(this.state.status)
    }

    onChangeStatus = (e: ChangeEvent<HTMLInputElement>) => {
       this.setState({
           status: e.currentTarget.value
       })
    }

    render() {
        return (
            <div>
                {this.state.editMode
                    ?
                        <input autoFocus
                               onBlur={this.deactivateEditMode}
                               value={this.state.status}
                               onChange={this.onChangeStatus}
                        />

                    : <span onDoubleClick={this.activateEditMode}> {this.props.status} </span>
                }
            </div>
        )

    }

}
