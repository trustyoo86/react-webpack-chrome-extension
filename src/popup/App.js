/**
 * popup app entry
 *
 * @since 2019.05.13 - draft
 */
'use strict';

import React from 'react';
import * as actions from './modules';
import { connect } from 'react-redux';

const styles = {
  container: {
    width: 800,
    height: 600,
  },
};

const App = () => {
  return (
    <div>
      {/* container */}
      <div style={styles.container} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  color: state.color,
  number: state.number,
});

const mapDispatchToProps = (dispatch) => ({
  onIncrement: () => dispatch(actions.increment()),
  onDecrement: () => dispatch(actions.decrement()),
});

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default AppContainer;