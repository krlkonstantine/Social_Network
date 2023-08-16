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
        <form className={s.profileDataFormContainer}>
            <button onClick={saveNewProfileInfo}>save</button>
            <div className={s.profileItemInputContaienr}>
                <label className={s.itemLabel} style={{whiteSpace: "nowrap"}} htmlFor="fullName">
                    Full name:
                </label>
                <Field
                    className={s.itemInput}
                    name="fullName"
                    component={'input'}
                />
            </div>
            <Field
                className={s.profile__input}
                name="fullName"
                component={'input'}
            />
            <div><span>Full name</span>
            </div>
            <div><span>Обо мне:</span></div>
            <div><span>Ищу работу:</span></div>
            <div className={s.profile__descr}>My skills:</div>
            <div>Обо мне:</div>
            <div><span>Contacts:</span>
                <div><span>Tg:</span></div>
                <div><span>Git:</span></div>
                <div><span>Fb:</span></div>
                <div><span>Vk:</span></div>
            </div>
        </form>
    )
}
export const EditProfileDataReduxForm = reduxForm<ProfileFormData, ProfileFormProps>(
    {form: 'profile'})(ProfileDataForm)
