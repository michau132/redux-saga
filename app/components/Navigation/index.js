/**
*
* Navigation
*
*/

import React from 'react';
import AppBar from '../AppBar';

import styles from './styles.css';

function Navigation({ topics, selectTopic }) {
  return (
    <div className={styles.navigation}>
      <AppBar />
     {topics.map(t => <div key={t.name} onClick={() => { selectTopic(t); }}>{t.name}</div>)}
    </div>
  );
}

export default Navigation;

Navigation.propTypes = {
  topics: React.PropTypes.arrayOf(
    React.PropTypes.shape({
      name: React.PropTypes.string.isRequired,
      description: React.PropTypes.string.isRequired,
    })
  ).isRequired,
  selectTopic: React.PropTypes.func.isRequired,
};
