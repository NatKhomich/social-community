import {useFormik} from 'formik';
import React from 'react';
import s from '../../Profile/MyPosts/MyPosts.module.css';

export const TextForm = (props: TextFormType) => {

    const formik = useFormik({
        initialValues: {
            text: ''
        },
        onSubmit: values => {
            props.callback(values)
            formik.resetForm()
        },
    })

    return <form onSubmit={formik.handleSubmit}>
                <textarea
                    className={s.textarea}
                    {...formik.getFieldProps('text')}
                />
        <button type={'submit'} className={s.button}> Send </button>
    </form>
}

//types
export type TextFormType = {
    callback: (text: DataTextFormType) => void
}

export type DataTextFormType = {
    text: string
}