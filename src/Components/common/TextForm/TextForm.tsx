import {useFormik} from 'formik';
import React from 'react';
import s from '../../Profile/MyPosts/MyPosts.module.css';

export type TextFormType = {
    text: string
}

export const TextForm = () => {

    const formik = useFormik({
        initialValues: {
            text: ''
        },
        // validate: (values) => {
        //     const errors: FormikErrorType = {}
        //     const regExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
        //     if (!values.email) {
        //         errors.email = 'Required'
        //     } else if (!regExp.test(values.email)) {
        //         errors.email = 'Invalid email address'
        //     }
        //     if(!values.password) {
        //         errors.password = 'Required'
        //     } else if (values.password.length < 4) {
        //         errors.password = 'Invalid password'
        //     }
        //     return errors
        // },
        onSubmit: values => {
            // props.login(values)
            console.log(values)
            formik.resetForm()
        },
    })

    return <form onSubmit={formik.handleSubmit}>
                <textarea
                    className={s.textarea}
                    {...formik.getFieldProps('text')}
                    />
        <button type={'submit'} className={s.button} > Add post</button>
            </form>
}