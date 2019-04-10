import React, { Component } from 'react';
import TrelloList from './TrelloList';
import {connect} from 'react-redux';
import Provider from 'react-redux';
import store from '../store/index';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'row'
  }
};

class App extends Component {
  render() {
    const {lists} = this.props;
    return (
      <Provider store={store}>
        <div style={styles.container}>
          { lists.map( list => (
              <TrelloList title = {list.title} cards = {list.cards}/>
            ))
          }
        </div>
      </Provider>
    );
  }
}

const mapStateToProps = state => ({
  lists: state.lists
})

export default connect(mapStateToProps)(App);

