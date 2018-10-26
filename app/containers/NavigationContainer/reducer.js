/*
 *
 * NavigationContainer reducer
 *
 */

import { fromJS } from 'immutable';
import {
  REQUEST_TOPICS_SUCCEDED, SELECT_TOPIC,
} from './constants';

const initialState = fromJS({
  topics: [],
});

function navigationContainerReducer(state = initialState, action) {
  switch (action.type) {
    case REQUEST_TOPICS_SUCCEDED:
      return state.set('topics', action.topics);
    case SELECT_TOPIC:
      return state.set('selectedTopic', action.topic);
    default:
      return state;
  }
}

export default navigationContainerReducer;
