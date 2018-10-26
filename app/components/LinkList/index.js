/**
*
* LinkList
*
*/

import React from 'react';


import styles from './styles.css';

function LinkList({ links }) {
  return (
    <div className={styles.linkList}>
      {
        links.map(item => (
          <div key={item.id}>
            {item.url}
          </div>
        ))
      }
    </div>
  );
}

LinkList.propTypes = {
  links: React.PropTypes.arrayOf(React.PropTypes.shape({
    description: React.PropTypes.string.isRequired,
    url: React.PropTypes.string.isRequired,
    topicName: React.PropTypes.string.isRequired,
    id: React.PropTypes.string.isRequired,
  })).isRequired,
}

export default LinkList;
