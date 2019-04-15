import React, { Component } from 'react';
import Icon from '@material-ui/core/Icon';
import Textarea from 'react-textarea-autosize';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

class TrelloActionButton extends Component {

    constructor(props){
        super(props);
        this.state  =   {
            renderTextArea: false,
            textAreaText: ""
        };
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
                <Card style={styles.textAreaContainer}>
                         {/* <CardContent style={styles.card}> */}
                               <Textarea autoFocus onChange={this.handleChange.bind(this)} style = {{
                        // width: '100%',
                        resize:'none',
                        padding:'0px 6px',
                        border:'0px',
                        width:'100%',
                        minHeight:'52px',
                        borderRadius: '3px',
                        boxSizing:'border-box'
                    }}
                    onBlur = {this.closeTextArea.bind(this)}
                    value = {this.state.textAreaText}
                    placeholder = {placeHolderText}
                    />
                        {/* </CardContent> */}
              
                </Card>
        );
    }

    renderButton(){
        const { list } = this.props;
        console.log("The value of the render props are",list);
        const buttonText = list ? "Add another list": "Add another card";
        return (
            <div style = {styles.container} onClick={this.openTextArea.bind(this)}>
                <Icon style = {{
                    height: '18px',
                }}>add</Icon>
                <p style = {{
                    font:'normal normal 400 normal 14px / 20px "Helvetica Neue", Arial, Helvetica, sans-serif',
                    margin:'0px 0px 0px 0px',
                    fontColor:'#6b808c',
                    backgroundColor:'transparent'}}>{buttonText}</p>
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