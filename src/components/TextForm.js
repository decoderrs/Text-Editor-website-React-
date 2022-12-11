import PropTypes from 'prop-types'
import React, { useState } from 'react'

export function TextForm(props) {

    const [text, setText] = useState("Enter a text here2");
    // setText = "new Text"; //Wrong way to Set value
    // setText("new Text"); //Correct way to set value
    const handleUpClick = () => {
        console.log('You have clicked uppercase');
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert('converted to uppercase','success');
    }

    const handleLoClick = () => {
        console.log('You have clicked lowercase');
        let newText = text.toLowerCase();
        setText(newText);
    }


    const handleClearText = () => {
        console.log('You have clicked lowercase');
        let newText = "";
        setText(newText);
    }

    const handleOnChange = (event) => {
        console.log('onChange');
        setText(event.target.value);
    }


    return (
        <>
            <div className="container" style={{ backgroundColor: props.mode === 'dark' ? '#0F3460' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h1>{props.heading}</h1>
                <div className="mb-3" >
                    <textarea className="form-control" id="myBox" value={text} onChange={handleOnChange} rows="8" style={{ backgroundColor: props.mode === 'dark' ? '#0F3460' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}></textarea>
                </div>
                <button className='btn btn-primary' onClick={handleUpClick}>Convert to uppercase</button>
                <button className='btn btn-primary mx-3' onClick={handleLoClick}>Convert to lowercase</button>
                <button className='btn btn-primary mx-3' onClick={handleClearText}>Clear Text</button>
            </div>
            <div className="container my-3 " style={{ backgroundColor: props.mode === 'dark' ? '#0F3460' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h1>{text.replace(/\s+/g, ' ').split(" ").length - 1} words and {text.length} characters</h1>
                <p >{0.008 * text.split(' ').length}  Minutes read</p>
                <h2>Preview</h2>
                <p>{text.length>0?text:'Enter something to preview here'}</p>
            </div>
        </>
    )
}


