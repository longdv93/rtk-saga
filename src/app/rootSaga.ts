import counterSaga from 'features/counter/counterSaga';
import { all, takeEvery } from 'redux-saga/effects'
function* helloSaga() {
    console.log("hello saga");
}
export default function* rootSaga() {
    console.log("Root saga");
    // yield takeEvery('counter/increment', helloSaga) // => when dispath action type counter/increment function helloSaga will run
    yield all([helloSaga(), counterSaga()])
}