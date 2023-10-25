import React from 'react'
import Grid from '@mui/material/Grid';
import Checkbox from '@mui/material/Checkbox';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import FormLabel from '@mui/material/FormLabel';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {useFormik} from 'formik';
import {connect} from 'react-redux';
import {loginTC} from '../../state/authReducer';
import {Redirect} from 'react-router-dom';
import {AppStateType} from '../../state/store';
import {selectAuthIsLoggedIn} from '../../state/selectors/authSelectors';
import s from './Login.module.css'

 type FormikErrorType = {
    email?: string
    password?: string
}

export type DataLoginType = {
    email: string
    password: string
    rememberMe: boolean
}

const Login = (props: LoginType) => {

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            rememberMe: false
        },
        validate: (values) => {
            const errors: FormikErrorType = {}
            const regExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
            if (!values.email) {
                errors.email = 'Required'
            } else if (!regExp.test(values.email)) {
                errors.email = 'Invalid email address'
            }
            if(!values.password) {
                errors.password = 'Required'
            } else if (values.password.length < 4) {
                errors.password = 'Invalid password'
            }
            return errors
        },
        onSubmit: values => {
            props.login(values)
            formik.resetForm()
        },
    })

    if (props.isLoggedIn) {
        return <Redirect to={'/profile'} />
    }

    return <Grid container justifyContent={'center'} className={s.loginForm}>
        <Grid item justifyContent={'center'}>

            <form onSubmit={formik.handleSubmit}>
            <FormControl>
                <FormLabel>
                    <p>To log in get registered
                        <a href={'https://social-network.samuraijs.com/'}
                           target={'_blank'}> here
                        </a>
                    </p>
                    <p>or use common test account credentials:</p>
                    <p>Email: free@samuraijs.com</p>
                    <p>Password: free</p>
                </FormLabel>
                <FormGroup>
                    <TextField label="Email"
                               margin="normal"
                               size='small'
                               {...formik.getFieldProps('email')}
                    />
                    {formik.touched.email && formik.errors.email ? <div style={{color: 'red'}}> {formik.errors.email} </div> : null}
                    <TextField type="password"
                               label="Password"
                               margin="normal"
                               size='small'
                               {...formik.getFieldProps('password')}
                    />
                    {formik.touched.password && formik.errors.password ? <div style={{color: 'red'}}> {formik.errors.password} </div> : null}
                    <FormControlLabel label={'Remember me'}
                                      control={<Checkbox/>}
                                      name='rememberMe'
                                      onChange={formik.handleChange}
                                      value={formik.values.rememberMe}
                    />
                    <Button type={'submit'} variant={'contained'} color={'primary'}>
                        Login
                    </Button>
                </FormGroup>
            </FormControl>
            </form>
        </Grid>
    </Grid>
}

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        isLoggedIn: selectAuthIsLoggedIn(state)
    }
}

type MapStateToPropsType = {
    isLoggedIn: boolean
}
type MapDispatchToPropsType = {
    login: (data: DataLoginType) => void
}
type LoginType = MapDispatchToPropsType & MapStateToPropsType

export default connect(mapStateToProps, {
    login: loginTC
})(Login)