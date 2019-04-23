import React, { Component } from 'react';
import Icon from '@material-ui/core/Icon';
import Textarea from 'react-textarea-autosize';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import { addCardAction, addListAction } from '../action';
import store from '../store';

class TrelloActionButton extends Component {

    constructor(props){
        super(props);
        this.state  =   {
            renderTextArea: false,
            textAreaText: ""
        };
    }
    
    handleChange(event) {
        console.log(event.target.value);
        this.setState({textAreaText: event.target.value})
    } 

    handleCloseClick(event){
        this.setState({
            renderTextArea:false,
            textAreaText:""});
    }
    
    handleAddButton(event){
        console.log("In the handle Add Button let's see what can be done");
        const {list} = this.props;
        if ( !list) {
            store.dispatch(addCardAction(this.props.listID,this.state.textAreaText));
        }
        else {
            store.dispatch(addListAction(this.state.textAreaText))
        }
        this.setState({
            renderTextArea: false,
            textAreaText:''
        });
    }


    renderTextArea(){
        const {list} = this.props;
        const placeHolderText = list? "Enter list title..." :"Enter a title for this card...";
        const buttonText = list? "Add List": "Add Card";
        return (
            <div style = {styles.textAreaContainer}
            onBlur = {this.closeTextArea.bind(this)} >
                <Card style={{
                    margin:'0px',
                    padding:'0px'
                }}>
                    <Textarea autoFocus onChange={this.handleChange.bind(this)} style = {{
                        resize:'none',
                        padding:'0px 6px',
                        border:'0px',
                        width:'100%',
                        minHeight:'52px',
                        borderRadius: '3px',
                        boxSizing:'border-box'
                    }}
                    // onBlur = {this.closeTextArea.bind(this)}
                    value = {this.state.textAreaText}
                    placeholder = {placeHolderText}
                    />
                </Card>
                <div style = {{
                    backgroundColor: '#dfe3e6',
                    display:'flex',
                    margin:'4px 0px 0px 0px'
                }}>
                    <Button variant="contained" color="primary" onMouseDown = {
                        this.handleAddButton.bind(this)
                    }>
                        {buttonText}
                    </Button> 
                    <Icon style = {{ border:'4px', padding:'4px'}} onMouseDown={this.handleCloseClick.bind(this)}>close</Icon>
                </div>
            </div>
        );
    }

    getCssForButton(){
        var commonCSS = {
            font:'normal normal 400 normal 14px / 20px "Helvetica Neue", Arial, Helvetica, sans-serif',
            margin:'0px 0px 0px 0px',
            fontColor:'#6b808c',
            backgroundColor:'transparent',
            // opacity: '0.5'
        };
        // const {list} = this.props;
        return commonCSS;
    }

    getCssForButtonContainer(){
        var container = {
            margin:'4px 4px 8px 4px',
            padding:'0px 4px',
            display:'flex',
            opacity:'1'
        }
        const {list} = this.props;
        if (list){
            container.opacity = 0.5;
        }
        return container;
    }

    renderButton(){
        const { list } = this.props;
        const buttonText = list ? "Add another list": "Add another card";
        return (
            <div style = {
                this.getCssForButtonContainer()
            } onClick={this.openTextArea.bind(this)}>
                <Icon style = {{
                    height: '18px',
                }}>add</Icon>
                <p style = { 
                    this.getCssForButton()
                 }>{buttonText}</p>
            </div>
        );
    }

    openTextArea = () => {
        this.setState({renderTextArea:true});
    }

    closeTextArea = () => {
        this.setState({renderTextArea:false});
    }

    render(){
        const { renderTextArea } = this.state;
        console.log("In the render method,", renderTextArea);
        return renderTextArea ? this.renderTextArea() : this.renderButton();
    }
}

const styles = {
    container: {
        margin:'4px 4px 8px 4px',
        padding:'0px 4px',
        display:'flex'
    },
    buttonContainer:{
        display: 'flex',
    },
    textAreaContainer: {
        backgroundColor: '#fff',
        borderRadius: '3px',
        margin:'0px 8px 8px 8px',
        padding:'0px',
        minHeight: '52px',
        cursor: 'pointer',
    },
    card:{
        margin:'0px',
        padding:'0px',
        minHeight:'24px',
    },
}
export default TrelloActionButton;