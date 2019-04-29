import React, { Component } from 'react';
import TrelloList from './TrelloList';
import {connect} from 'react-redux';
import TrelloActionButton from './TrelloActionButton';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import reorderAction from './../action/reorderAction';
import store from './../store';
import styled from 'styled-components';
import { List } from '@material-ui/core';

const AppContainer = styled.div`
  display:flex;
  flex-direction:row;
  margin:0px 0px 0px 8px;
  cursor:pointer;
`

const Body = styled.div`
  background-color: rgb(0, 121, 191);
  min-width: fit-content;
  height: 200vh;
`
class App extends Component {
  onDragEnd = (result) => {
    const { source, destination, draggableId, type} = result;
    if (!destination){
      return;
    }
    store.dispatch(reorderAction(
      source,
      destination,
      draggableId,
      type
    ));
    console.log();
  }

  render() {
    const {lists} = this.props;
    return (
      <DragDropContext onDragEnd = {this.onDragEnd}>
        <Body>
          <h1 style = {{margin:'0px 0px 10px'}}>Trello App</h1>
            <Droppable droppableId = {'appList'} type ={"list"} direction="horizontal">
            { (provided) => (
              <AppContainer  {...provided.droppableProps}  ref = {provided.innerRef}>
                {lists.map( (list,index) => (
                    <TrelloList key = {list.id} title = {list.title} cards = {list.cards} listID = {list.id} index = {index}/>
                  ))}
              <TrelloActionButton list/>
              </AppContainer>
              )
            }
            </Droppable>
        </Body>
      </DragDropContext>
    );
  }
}

const mapStateToProps = state => ({
  lists: state.lists
})

export default connect(mapStateToProps)(App);

