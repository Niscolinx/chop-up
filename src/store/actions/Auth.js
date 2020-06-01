import * as actions from './actionTypes'
import fire from '../../firebase/firebase'


export const authStart = () => {
    return {
        type: actions.AUTH_START
    }
}

export const authSuccessCheck = (auth) => {
    return dispatch => {

        let user = fire.auth().currentUser;
        let token = user.getIdToken()
        token.then((res) => {
            localStorage.setItem('userId', auth)
            localStorage.setItem('token', res)
            dispatch(authSuccess(auth, res))
            dispatch(fire.analytics())

            console.log('This is the firebase analytics', fire.analytics())
            console.log('The auth was successful')

            setTimeout(() => {
                dispatch(logOut())
            }, 3600 * 1000);
        })
            .catch((err) => {
                dispatch(authFailed(err))
            })
    }
}

export const authSuccess = (auth, res) => {
    return {
        type: actions.AUTH_SUCCESS,
        userId: auth,
        tokenId: res
    }
}

export const authFailed = (error) => {
    return {
        type: actions.AUTH_FAILED,
        error
    }
}

export const logOut = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('userId')

    return {
        type: actions.AUTH_LOGOUT
    }
}


export const clearError = () => {

    return {
        type: actions.AUTH_CLEAR_ERROR
    }
}

export const initAuth = (phoneNumber, password, isLogin) => {
    window.recaptchaVerifier = fire.auth().RecaptchaVerifier('sign-in-button')
    let appVerifier = window.recaptchaVerifier;


    return dispatch => {
        dispatch(authStart())


        let url = fire.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
        if (!isLogin) {
            url = fire.auth().createUserWithEmailAndPassword(phoneNumber, password)
        }
        url.then(res => {
            window.confirmationResult.confirm(password);

            dispatch(authSuccessCheck(res.user.uid))
        })
            .catch(err => {
                dispatch(authFailed(err.message))
            })
    }
}