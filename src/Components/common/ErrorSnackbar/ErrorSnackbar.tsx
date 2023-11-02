import {AlertProps, Snackbar} from "@mui/material";
import {forwardRef} from "react";
import MuiAlert from '@mui/material/Alert';
import {AppRootStateType} from "../../../state/store";
import {connect} from "react-redux";
import {setErrorAC} from "../../../state/appReducer";

const Alert = forwardRef<HTMLDivElement, AlertProps>(function Alert(
    props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />
})

const ErrorSnackbar = (props: ErrorSnackbarType) => {

    const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return
        }
        props.setError(null)
    };

    return (
        <Snackbar open={!!props.error} autoHideDuration={6000} onClose={handleClose}>
            <Alert onClose={handleClose} severity="error" sx={{width: '100%'}}>
                {props.error}
            </Alert>
        </Snackbar>
    )
}

let mapStateToProps = (state: AppRootStateType): MapStateToPropsType => {
    return {
        error: state.app.error
    }
}

type MapStateToPropsType = {
    error: string | null
}
type MapDispatchToPropsType = {
    setError: (error: string | null) => void
}
type ErrorSnackbarType = MapDispatchToPropsType & MapStateToPropsType

export default connect(mapStateToProps, {
   setError: setErrorAC
})(ErrorSnackbar)