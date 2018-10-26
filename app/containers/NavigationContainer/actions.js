/*
 *
 * NavigationContainer actions
 *
 */

import {
  REQUEST_TOPICS,
  REQUEST_TOPICS_FAILED,
  REQUEST_TOPICS_SUCCEDED,
  SELECT_TOPIC,
} from './constants';

export function requestTopics() {
  return {
    type: REQUEST_TOPICS,
  };
}

export function requestTopicsSucceded(topics) {
  return {
    type: REQUEST_TOPICS_SUCCEDED,
    topics,
  };
}

export function requestTopicsFailed(message) {
  return {
    type: REQUEST_TOPICS_FAILED,
    message,
  };
}

export function selectTopic(topic) {
  return {
    type: SELECT_TOPIC,
    topic,
  }
}