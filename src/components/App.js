import React, { Component } from 'react';
import TrelloList from './TrelloList';
import {connect} from 'react-redux';
import TrelloActionButton from './TrelloActionButton';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'row',
    margin:'0px 0px 0px 8px',
    cursor:'pointer'
  },
  body:{
    backgroundColor:'rgb(0, 121, 191)',
    minWidth: 'fit-content',
    height: '100vh'
  },
  containerTrelloList: {
    backgroundColor: '#dfe3e6',
    borderRadius: '3px',
    display: 'flex',
    flexDirection: 'column',
    width: '272px',
    marginRight: '8px',
    boxSizing: 'border-box'
},
};

class App extends Component {
  render() {
    const {lists} = this.props;
    return (
      <div style={styles.body}>
        <h1 style = {{margin:'0px 0px 10px'}}>Trello App</h1>
        <div style={styles.container}>
          { lists.map( list => (
              <TrelloList key = {list.id} title = {list.title} cards = {list.cards} listID = {list.id}/>
            ))
          }
          {/* There will  */}
          {/* <div style={styles.containerTrelloList}> */}
          <TrelloActionButton list/>
          {/* </div> */}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  lists: state.lists
})

export default connect(mapStateToProps)(App);

