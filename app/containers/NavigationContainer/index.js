/*
 *
 * NavigationContainer
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import Navigation from '../../components/Navigation'
import selectNavigationContainer from './selectors';
import { requestTopics, selectTopic } from './actions';

export class NavigationContainer extends React.Component { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    requestTopics: React.PropTypes.func.isRequired,
    selectTopic: React.PropTypes.func.isRequired,
  }
  
  componentDidMount() {
    this.props.requestTopics();
  }
  render() {
    return (
      <Navigation {...this.props} />
    );
  }
}

const mapStateToProps = selectNavigationContainer();

function mapDispatchToProps(dispatch) {
  return {
    requestTopics: () => dispatch(requestTopics()),
    selectTopic: (topic) => dispatch(selectTopic(topic))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(NavigationContainer);
