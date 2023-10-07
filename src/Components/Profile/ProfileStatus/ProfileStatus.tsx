import React from 'react';

type ProfileStatusType = {
    status: string
}

export class ProfileStatus extends React.Component<ProfileStatusType> {
    state = {
        editMode: false
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
    }

    render() {
        return (
            <div>
                {this.state.editMode
                    ?
                        <input type="text"
                               autoFocus
                               onBlur={this.deactivateEditMode}
                               value={this.props.status}/>

                    : <span onDoubleClick={this.activateEditMode}> {this.props.status} </span>
                }
            </div>
        )

    }

}
