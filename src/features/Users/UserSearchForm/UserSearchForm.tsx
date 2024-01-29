import React from 'react';
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import {useFormik} from "formik";
import s from './UserSearchForm.module.css'

type Props = {
    onSearchTermForm: (term: string) => void
}

export const UserSearchForm = ({onSearchTermForm}: Props) => {

    const formik = useFormik({
        initialValues: {
            term: '',
        },
        onSubmit: values => {
            onSearchTermForm(values.term)
        },
    })

    return (
        <form onSubmit={formik.handleSubmit}>
            <div className={s.buttonForm}>
                <TextField type="term"
                           label="name"
                           margin="normal"
                           size='small'
                           {...formik.getFieldProps('term')}
                />

                <Button disabled={formik.values.term === ''} type={'submit'} variant={'outlined'} color={'secondary'} sx={{margin: '8px 0 0 5px'}}>
                    Search
                </Button>
            </div>

        </form>
    );
};
