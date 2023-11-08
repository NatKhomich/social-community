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
import {loginTC} from './authReducer';
import {Redirect} from 'react-router-dom';
import {AppRootStateType} from '../../app/store';
import {selectAuthCaptchaUrl, selectAuthIsLoggedIn} from './authSelectors';
import style from './Login.module.css'

type FormikErrorType = {
    email?: string
    password?: string
}

export type DataLoginType = {
    email: string
    password: string
    rememberMe: boolean
    captcha: string | null
}

const Login = (props: LoginType) => {

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            rememberMe: false,
            captcha: ''
        },
        validate: (values) => {
            const errors: FormikErrorType = {}
            const regExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
            if (!values.email) {
                errors.email = 'Required'
            } else if (!regExp.test(values.email)) {
                errors.email = 'Invalid email address'
            }
            if (!values.password) {
                errors.password = 'Required'
            } else if (values.password.length < 4) {
                errors.password = 'Invalid password'
            }
            return errors
        },
        onSubmit: values => {
            props.login(values.email, values.password, values.rememberMe, values.captcha)
            console.log(values)
            // formik.resetForm()
        },
    })

    if (props.isLoggedIn) {
        return <Redirect to={'/profile'}/>
    }

    // if (props.captchaUrl) {
    //     return (
    //         <form className={style.captcha} onSubmit={formik.handleSubmit}>
    //             <img className={style.captchaImg} src={props.captchaUrl} alt={'captcha'}/>
    //             <TextField label="captchaUrl"
    //                        margin="normal"
    //                        size='small'
    //                 {...formik.getFieldProps('captchaUrl')} />
    //             <Button type={'submit'} variant={'outlined'} color={'secondary'}>
    //                 Send
    //             </Button>
    //         </form>
    //     )
    // }


    return <Grid container justifyContent={'center'} className={style.loginForm}>
        <Grid item justifyContent={'center'}>

            <form onSubmit={formik.handleSubmit}>
                <FormControl>
                    <FormGroup>
                        <TextField label="Email"
                                   margin="normal"
                                   size='small'
                                   {...formik.getFieldProps('email')}
                        />
                        {formik.touched.email && formik.errors.email ?
                            <div style={{color: 'red'}}> {formik.errors.email} </div> : null}
                        <TextField type="password"
                                   label="Password"
                                   margin="normal"
                                   size='small'
                                   {...formik.getFieldProps('password')}
                        />
                        {formik.touched.password && formik.errors.password ?
                            <div style={{color: 'red'}}> {formik.errors.password} </div> : null}
                        <FormControlLabel label={'Remember me'}
                                          control={<Checkbox/>}
                                          name='rememberMe'
                                          onChange={formik.handleChange}
                                          value={formik.values.rememberMe}
                        />


                        {props.captchaUrl && <img className={style.captchaImg} src={props.captchaUrl} alt={'captcha'}/>}
                        {props.captchaUrl && <div>
                            <TextField label="captcha"
                                       margin="normal"
                                       size='small'
                                       style={{width: '100%'}}
                                       {...formik.getFieldProps('captcha')} />
                        </div>
                        }


                        <Button type={'submit'} variant={'outlined'} color={'secondary'}>
                            Login
                        </Button>

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
                    </FormGroup>
                </FormControl>
            </form>
        </Grid>
    </Grid>
}

let mapStateToProps = (state: AppRootStateType): MapStateToPropsType => {
    return {
        isLoggedIn: selectAuthIsLoggedIn(state),
        captchaUrl: selectAuthCaptchaUrl(state)
    }
}

type MapStateToPropsType = {
    isLoggedIn: boolean
    captchaUrl: string | null
}
type MapDispatchToPropsType = {
    login: (email: string, password: string, rememberMe: boolean, captcha: string | null) => void
}
type LoginType = MapDispatchToPropsType & MapStateToPropsType

export default connect(mapStateToProps, {
    login: loginTC
})(Login)