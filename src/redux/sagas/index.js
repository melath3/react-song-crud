import { all } from "redux-saga/effects";
import { watchUsersAsync } from "./song";

export function* rootSaga() {
    yield all([
        watchUsersAsync()
    ])
}