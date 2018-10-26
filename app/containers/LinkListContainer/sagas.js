// import { take, call, put, select } from 'redux-saga/effects';

// Individual exports for testing
import { call } from 'redux-saga/effects';
import { takeLatest } from 'redux-saga';
import { SELECT_TOPIC } from '../NavigationContainer/constants';


function fetchLinksFromServer(topic) {
  return fetch(`http://localhost:3000/api/topics/${topic.name}/links`)
    .then(res => res.json())
}

function* fetchLinks(action) {
  console.log('action', action)
  try {
    const links = yield call(fetchLinksFromServer, action.topic)
    console.log('to sa linki', links);
  }
  catch (e) {
    
  }
}


export function* defaultSaga() {
  yield* takeLatest(SELECT_TOPIC, fetchLinks);
}

// All sagas to be loaded
export default [
  defaultSaga,
];
