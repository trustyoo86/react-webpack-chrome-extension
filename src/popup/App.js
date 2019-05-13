/**
 * popup app entry
 *
 * @since 2019.05.13 - draft
 */
'use strict';

import React from 'react';

const styles = {
  container: {
    width: 800,
    height: 600,
  },
};

class App extends React.Component {
  render() {
    return (
      <div>
        {/* container */}
        <div style={styles.container} />
      </div>
    );
  }
}

export default App;