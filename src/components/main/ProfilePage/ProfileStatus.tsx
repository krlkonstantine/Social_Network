import React, {ChangeEvent, useState} from "react";
import s from "./Profile.module.css";

type ProfileStatusType = {
    status: string
    updateStatus: (status: string) => void
}

class ProfileStatus extends React.Component<ProfileStatusType> {
    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
        console.log('this: ', this)
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

    changeInputValue = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            status: e.target.value
        })
    }

    componentDidUpdate(prevProps: Readonly<ProfileStatusType>, prevState: Readonly<{}>, snapshot?: any) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }

    render() {
        return (
            <div className={s.profile__descr}>
                {this.state.editMode
                    ? <input autoFocus={true}
                             onBlur={this.deactivateEditMode}
                             value={this.state.status}
                             onChange={this.changeInputValue}
                    />
                    : <span onDoubleClick={this.activateEditMode}>
                        {this.props.status || 'status not found'}
                </span>
                }
            </div>
        )
    }
}

export default ProfileStatus