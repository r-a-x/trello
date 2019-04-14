import React, { Component } from 'react';
import Icon from '@material-ui/core/Icon';
import Textarea from 'react-textarea-autosize';
import Card from '@material-ui/core/Card';

class TrelloActionButton extends Component {

    constructor(props){
        super(props);
        this.state={renderTextArea:false,textAreaText:""};
    }
    
    handleChange(event) {
        console.log("In the handle change Method");
        console.log(event.target.value);
        this.setState({textAreaText: event.target.value})
    }  

    renderTextArea(){
        const {list} = this.props;
        const placeHolderText = list? "Enter list title..." :"Enter a title for this card...";
        return (
            <Card style = {styles.textAreaContainer}>
                <Textarea autoFocus onChange={this.handleChange.bind(this)} style = {{
                    width: '100%'
                }}
                onBlur = {this.closeTextArea.bind(this)}
                value = {this.state.textAreaText}
                placeholder = {placeHolderText}
                />
            </Card>
        );
    }

    renderButton(){
        const { list } = this.props;
        console.log("The value of the render props are",list);
        const buttonText = list ? "Add another list": "Add another card";
        return (
            <div style = {styles.buttonContainer} onClick={this.openTextArea.bind(this)}>
                <Icon style = {{
                    height: '20px',
                    fontSize: '12px',
                    lineHeight: '20px',
                    width: '20px'
                }}>add</Icon>
                <p style = {{margin:'0px 0px 0px 0px'}}>{buttonText}</p>
            </div>
        );
    }

    openTextArea = () => {
        console.log("Opening the textArea");
        this.setState({renderTextArea:true});
    }

    closeTextArea = () => {
        console.log("Closing the textArea");
        this.setState({renderTextArea:false});
    }

    render(){
        const { renderTextArea } = this.state;
        return ( <div style = {styles.container}>
                    {renderTextArea ? this.renderTextArea() : this.renderButton()}
                </div>);
    }
}

const styles = {
    buttonContainer:{
        display: 'flex',
        cursor: 'pointer',
    },
    container: {
        marginTop:'8px'
    },
    textAreaContainer: {
        backgroundColor: '#fff',
        borderRadius: '3px',
        boxShadow: '0 1px 0 rgba(9,45,66,.25)',
        cursor: 'pointer',
        display: 'block',
        // marginBottom: '8px',
        marginTop: '8px',
        maxWidth: '300px',
        minHeight: '20px',
        position: 'relative',
        textDecoration: 'none',
        height: '52px',
        paddingBottom: '2px'
    }
}
export default TrelloActionButton;