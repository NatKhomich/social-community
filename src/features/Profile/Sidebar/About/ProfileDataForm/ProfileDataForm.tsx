import {useFormik} from 'formik';
import React from 'react';
import styles from './ProfileDataForm.module.css'
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import {ContactsType} from "../../../profileReducer";
import TextField from "@mui/material/TextField";
import {UpdateProfileType} from "../../../../../api/profileApi";

type ProfileDataFormType = {
    callback: (profile: UpdateProfileType) => void
    profile: UpdateProfileType | null
}

type FormikErrorType = {
    aboutMe: string
    fullName: string
    lookingForAJob?: string
    lookingForAJobDescription?: string
    contacts: {
        facebook: string | undefined
        website: string | undefined
        vk: string | undefined
        twitter: string | undefined
        instagram: string | undefined
        youtube: string | undefined
        github: string | undefined
        mainLink: string | undefined
    }
}

export const ProfileDataForm = (props: ProfileDataFormType) => {
    const {profile, callback} = props

    const formik = useFormik({
        initialValues: {
            aboutMe: profile?.aboutMe,
            fullName: profile?.fullName,
            lookingForAJob: false,
            lookingForAJobDescription: profile?.lookingForAJobDescription,
            contacts: {
                facebook: profile?.contacts.facebook,
                website: profile?.contacts.website,
                vk: profile?.contacts.vk,
                twitter: profile?.contacts.twitter,
                instagram: profile?.contacts.instagram,
                youtube: profile?.contacts.youtube,
                github: profile?.contacts.github,
                mainLink: profile?.contacts.mainLink
            }
        },
        validate: (values) => {
            const errors: FormikErrorType = {} as FormikErrorType;

            if (!values.fullName) errors.fullName = 'Full name is required';
            if (!values.lookingForAJobDescription) errors.lookingForAJobDescription = 'Professional skills are required';
            if (!values.lookingForAJob) errors.lookingForAJob = 'Professional skills are required';
            if (!values) errors.aboutMe = 'About me are required';

            const contactsErrors: ContactsType = {} as ContactsType;
            const contacts = values.contacts || {};

            if (!contacts.facebook) contactsErrors.facebook = 'The field is required';
            if (!contacts.website) contactsErrors.website = 'The field is required';
            if (!contacts.vk) contactsErrors.vk = 'The field is required';
            if (!contacts.twitter) contactsErrors.twitter = 'The field is required';
            if (!contacts.instagram) contactsErrors.instagram = 'The field is required';
            if (!contacts.youtube) contactsErrors.youtube = 'The field is required';
            if (!contacts.github) contactsErrors.github = 'The field is required';
            if (!contacts.mainLink) contactsErrors.mainLink = 'The field is required';

            if (Object.keys(contactsErrors).length > 0) errors.contacts = contactsErrors;
            return errors;
        },

        onSubmit: (values, {setSubmitting}) => {
            const errors = formik.validateForm(values);

            if (Object.keys(errors).length === 0) {
                callback(values);
            }

            setSubmitting(false);
        },
    })

    return <form className={styles.formContainer} onSubmit={formik.handleSubmit}>
        <div className={styles.root}>
            <div className={styles.formItems}>

                <div>
                    <b>Full name</b>: {profile?.fullName}
                    <TextField placeholder={'Full name'} size='small'
                               style={{width: '100%'}}
                               {...formik.getFieldProps('fullName')} />
                    {formik.touched.fullName && formik.errors.fullName ?
                        <div style={{color: 'red'}}> {formik.errors.fullName} </div> : null}
                </div>

                <div className={styles.checkboxContainer}>
                    <div><b>Looking for a job</b></div>
                    <FormControlLabel label={'Yes / No'} style={{width: '100%'}} control={<Checkbox/>}
                                      {...formik.getFieldProps('lookingForAJob')}/>
                    {formik.touched.lookingForAJob && formik.errors.lookingForAJob ?
                        <div style={{color: 'red'}}> {formik.errors.lookingForAJob} </div> : null}
                </div>

                <div>
                    <b>My professional skills</b>: {profile?.lookingForAJobDescription}
                    <TextField size='small'
                               style={{width: '100%'}}
                               {...formik.getFieldProps('lookingForAJobDescription')} />
                    {formik.touched.lookingForAJobDescription && formik.errors.lookingForAJobDescription ?
                        <div style={{color: 'red'}}> {formik.errors.lookingForAJobDescription} </div> : null}
                </div>

                <div>
                    <b>About me</b>: {profile?.aboutMe}
                    <TextField size='small' style={{width: '100%'}}
                               {...formik.getFieldProps('aboutMe')} />
                    {formik.touched.aboutMe && formik.errors.aboutMe ?
                        <div style={{color: 'red'}}> {formik.errors.aboutMe} </div> : null}
                </div>

                {profile?.contacts && (
                    <div className={styles.contacts}>
                        {Object.entries(profile.contacts).map(([key]) => (
                            <div key={key}>
                                <b>{key}</b>:
                                <TextField
                                    style={{width: '100%'}}
                                    size="small"
                                    {...formik.getFieldProps(`contacts.${key}`)}
                                />
                                {formik.touched.contacts?.[key as keyof typeof formik.touched.contacts]
                                    && formik.errors.contacts?.[key as keyof typeof formik.errors.contacts]
                                    && ( <div
                                        style={{color: 'red'}}>{formik.errors.contacts[key as keyof typeof formik.errors.contacts]}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                )}

                <div className={styles.buttonBlock}>
                    <button type={'submit'} className={styles.saveButton}> Save</button>
                </div>
            </div>
        </div>
    </form>
}
