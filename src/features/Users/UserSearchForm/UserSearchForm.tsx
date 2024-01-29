import React from 'react';
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import {useFormik} from "formik";
import s from './UserSearchForm.module.css'

type Props = {
    onSearchTermForm: (term: string, friend: boolean | null) => void
    onlyFriends: (friend: boolean | null) => void
}

export const UserSearchForm = ({onSearchTermForm, onlyFriends}: Props) => {

    const formik = useFormik({
        initialValues: {
            term: '',
            friend: false as boolean | null
        },
        onSubmit: values => {
            onSearchTermForm(values.term, values.friend)
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

                <Button disabled={formik.values.term === ''}
                        type={'submit'} variant={'outlined'}
                        color={'secondary'}
                        sx={{margin: '8px 0 0 5px'}}>
                    Search
                </Button>

                <Button type={'submit'} variant={'outlined'}
                        color={'secondary'}
                        sx={{margin: '8px 0 0 5px'}}
                        onClick={() => onlyFriends(null)}
                >
                   All
                </Button>

                <Button type={'submit'} variant={'outlined'}
                        color={'secondary'}
                        sx={{margin: '8px 0 0 5px'}}
                        onClick={() => onlyFriends(true)}
                >
                    Friends
                </Button>
            </div>
        </form>
    );
};
