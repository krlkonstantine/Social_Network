import React from 'react';
import s from './ProfileDataForm.module.css';
import {ApiUserProfileType} from "../../../../redux/reducers/profile-reducer";
import {reduxForm, Field, InjectedFormProps} from 'redux-form';

// type ProfileDataFormProps = {
//     profile: ApiUserProfileType
//     isOwner: boolean
// }
//
// type FormDataType = {
//     onSubmit: (formData: ApiUserProfileType) => void
// }

type ProfileFormProps = {
    onSubmit: (formData: ApiUserProfileType) => void
}

type ProfileFormData = ApiUserProfileType;


export const ProfileDataForm: React.FC<InjectedFormProps<ProfileFormData, ProfileFormProps> & ProfileFormProps> = (props) => {

    const saveNewProfileInfo = () => {
    }

    return (
        <form onSubmit={props.handleSubmit} className={s.profileDataFormContainer}>

            <ProfileDataInput inputLabel={"Full name"} inputField={"fullName"}/>
            <ProfileDataInput inputLabel={"Open to opportunities"} inputField={"lookingForAJob"}
                              inputType={"checkbox"}/>
            <ProfileDataInput inputLabel={"My skills"} inputField={"lookingForAJobDescription"}/>
            <ProfileDataInput inputLabel={"About me"} inputField={"aboutMe"}/>

            <div className={s.contactsContainer}>
                <span className={s.mainTitle}>Contacts:</span>
                <ProfileDataInput inputLabel={"Tg"} inputField={"mainLink"}/>
                <ProfileDataInput inputLabel={"Git"} inputField={"github"}/>
                <ProfileDataInput inputLabel={"Vk"} inputField={"vk"}/>
                <ProfileDataInput inputLabel={"Site"} inputField={"website"}/>
            </div>
            <button className={s.submitButton} type="submit">Save Changes</button>
        </form>
    )
}
export const EditProfileDataReduxForm = reduxForm<ProfileFormData, ProfileFormProps>(
    {form: 'profile'})(ProfileDataForm)

type ProfileDataInputType = {
    inputLabel: string
    inputField: string
    inputType?: string
}
const ProfileDataInput = (props: ProfileDataInputType) => {
    return (
        <div className={s.profileItemInputContainer}>
            <label className={s.itemLabel} style={{whiteSpace: "nowrap"}} htmlFor={props.inputField}>
                {props.inputLabel}:
            </label>
            <Field
                className={s.itemInput}
                name={props.inputField}
                component={'input'}
                type={props.inputType}
            />
        </div>
    )
}
