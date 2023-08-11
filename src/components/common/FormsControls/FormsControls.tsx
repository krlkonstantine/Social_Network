import React from "react";
import s from './FormsControls.module.css'

const FormControl = ({input, meta: {visited, error}, children, ...props}: any) => {

    const hasError = visited && error
    const formClassStyle = s.formControl + (hasError ? ' ' + s.error : '')

    return (
        <div className={formClassStyle}>
            <div>
                {children}
            </div>
            {hasError && <span>{error}</span>}
        </div>
    )
}

export const Textarea = (props: any) => {
    const {input, meta, children, ...restProps} = props
    return <FormControl {...props}> <textarea {...input} {...restProps}/></FormControl>
}

export const Input = (props: any) => {
    const {input, meta, children, ...restProps} = props
    return <FormControl {...props}> <input {...input} {...restProps}/></FormControl>
}