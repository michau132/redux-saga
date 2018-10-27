// import { take, call, put, select } from 'redux-saga/effects';
import { REQUEST_TOPICS } from './constants';
import { takeLatest } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import { requestTopicsSucceded, requestTopicsFailed } from './actions';

export function fetchTopicsFromServer() {
  return fetch('http://localhost:3000/api/topics')
    .then(res => res.json());
}

function* fetchTopics() {
  try {
    const topics = yield call(fetchTopicsFromServer);
    yield put(requestTopicsSucceded(topics));
  } catch (e) {
    put(requestTopicsFailed(e));
  }
}

export function* fetchTopicsSaga() {
  yield takeLatest(REQUEST_TOPICS, fetchTopics);
}


export default [
  fetchTopicsSaga,
];
