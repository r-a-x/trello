import React, { Component } from 'react';
import TrelloList from './TrelloList';
import {connect} from 'react-redux';

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
      <div>
        <h1>Trello App</h1>
        <div style={styles.container}>
          { lists.map( list => (
              <TrelloList key = {list.id} title = {list.title} cards = {list.cards}/>
            ))
          }
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  lists: state.lists
})

export default connect(mapStateToProps)(App);

