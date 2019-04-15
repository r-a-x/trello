import React, { Component } from 'react';
import TrelloList from './TrelloList';
import {connect} from 'react-redux';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'row',
    margin:'0px 0px 0px 8px',
    cursor:'pointer'
  },
  body:{
    backgroundColor:'rgb(0, 121, 191)',
    width: '100%',
    height: '100vh'
  }
};

class App extends Component {
  render() {
    const {lists} = this.props;
    return (
      <div style={styles.body}>
        <h1 style = {{margin:'0px 0px 10px'}}>Trello App</h1>
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

