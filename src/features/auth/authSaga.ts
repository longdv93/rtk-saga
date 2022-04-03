
import { PayloadAction } from "@reduxjs/toolkit";
import { call, delay, fork, put, take } from "redux-saga/effects";
import { authActions, LoginPayload } from "./authSlice";

function* handleLogin(payload: LoginPayload) {
    console.log('handle log in', payload);

    try {
        yield delay(1000);
        localStorage.setItem('access_token', 'fake_access_token');
        yield put(
            authActions.loginSuccess({
                id: 1,
                name: 'Easy Frontend'
            })
        )
    } catch (error: any) {
        yield put(authActions.loginFailed(error))
    }
}
function* handleLogout() {
    yield delay(1000);
    console.log('handle log out');
    localStorage.removeItem('access_token')
    // redirect to login page
}
function* watchLoginFlow() {
    while (true) {
        console.log('watch login');
        const isLoggedIn = Boolean(localStorage.getItem('access_token'));
        if (!isLoggedIn) {
            const action: PayloadAction<LoginPayload> = yield take(authActions.login.type);
            yield fork(handleLogin, action.payload);
        }

        yield take(authActions.logout.type);
        yield call(handleLogout);
    }
}

export default function* authSaga() {
    console.log('Auth saga');
    yield fork(watchLoginFlow)
}