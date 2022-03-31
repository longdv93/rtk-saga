import { delay, takeEvery, takeLatest, takeLeading, throttle } from "redux-saga/effects";
import { incrementSaga } from "./counterSlice";
function* handleIncrementSaga() {
    console.log('a');
    yield delay(1000)
    console.log('completed a');


}
export default function* counterSaga() {
    // yield takeEvery(incrementSaga.toString(), handleIncrementSaga)
    yield takeLeading(incrementSaga.toString(), handleIncrementSaga)
}