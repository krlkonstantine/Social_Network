import React from 'react';
import s from './SendMyPost.module.css';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLengthTC, required} from "../../../../utils/validators/validaqtors";
import {Textarea} from "../../../common/FormsControls/FormsControls";

type SendMyPostPropsType = {
    addPost: (textNewPost: string) => void
}

type FormDataType = {
    newPostText: string
}

const maxLength10 = maxLengthTC(10)

const AddPostForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={s.myPostForm}>
                <pre>
                    <Field component={Textarea}
                           name='newPostText'
                           placeholder={'Write your post...'}
                           validate={[required, maxLength10]}
                    />
                </pre>
            <button>Send</button>
        </form>
    )
}

const AddPostReduxForm = reduxForm<FormDataType>({
    form: 'postAddPostForm'
})(AddPostForm)

export function SendMyPost(props: SendMyPostPropsType) {

    const addNewPost = (values: FormDataType) => {
        props.addPost(values.newPostText)
    }

    return (
        <div className={s.myPost}>
            <h3>My posts</h3>
            <AddPostReduxForm onSubmit={addNewPost}/>
        </div>
    )
}

