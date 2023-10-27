import {useFormik} from 'formik';
import React from 'react';
import styles from './TextForm.module.css'

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

    return <form className={styles.form} onSubmit={formik.handleSubmit}>
                <textarea className={styles.textarea}
                          {...formik.getFieldProps('text')}
                />

        <div className={styles.buttonBlock}>
            <button className={styles.button}>{props.name}</button>
        </div>
    </form>
}

//types
export type TextFormType = {
    callback: (text: DataTextFormType) => void
    name: string
}

export type DataTextFormType = {
    text: string
}