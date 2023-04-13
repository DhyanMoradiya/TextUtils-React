import React, { useState } from 'react'

export default function TextForm(props) {
    const [text, setText] = useState("");
    // text = "new text" //Wrong way to set text 
    // setText("new text")  //Correct way to set text

    const handleUpClick = () => {
        // console.log("Upper case was clicked" + text );
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert('Converted to uppercase', 'success')
    }

    const handleLowerClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert('Converted to lowercase', 'success')
    }

    const handleReverseClick = () => {
        let newText = text.split('').reverse().join("");
        setText(newText);
        props.showAlert('Text is reversed', 'success')
    }

    const handleCopy = () => {
        navigator.clipboard.writeText(text);
        props.showAlert('copied to clipboard!!!', 'success')
    }

    const handleRemoveExtraSpaces = () => {
        let newText = text.split(/[ ]+/).join(" ");
        setText(newText);
        props.showAlert('Extra spaces are removed', 'success')

    }

    const handleOnChange = (event) => {
        // console.log("On Change");
        setText(event.target.value);
    }

    const handleClearClick = () => {
        setText("");
        props.showAlert('Text box is cleared', 'success')
    }

    return (
        <>
            <div style={{
                color: props.mode.color,
                background: props.mode.bodyBackground
            }}>

                <div className="container">
                    <h2>{props.heading}</h2 >
                    <div className="mb-3">
                        <textarea className="form-control" style={{
                            color: props.mode.color,
                            background: props.mode.bodyBackground,
                            border: `1px solid ${props.mode.btnBackground}`
                        }} value={text} onChange={handleOnChange} id="MyBox" rows="8"></textarea>
                        <button style={{
                            color: props.mode.btnColor,
                            background: props.mode.btnBackground,
                            border: `1px solid ${props.mode.btnBackground}`
                        }} className="btn btn-primary my-3 " onClick={handleUpClick}>Convert to Uppercase</button>
                        <button style={{
                            color: props.mode.btnColor,
                            background: props.mode.btnBackground,
                            border: `1px solid ${props.mode.btnBackground}`
                        }} className="btn btn-primary my-3 mx-1" onClick={handleLowerClick}>Convert to Lowercase</button>
                        <button style={{
                            color: props.mode.btnColor,
                            background: props.mode.btnBackground,
                            border: `1px solid ${props.mode.btnBackground}`
                        }} className="btn btn-primary my-3 " onClick={handleReverseClick}>Reverse Text</button>
                        <button style={{
                            color: props.mode.btnColor,
                            background: props.mode.btnBackground,
                            border: `1px solid ${props.mode.btnBackground}`
                        }} className="btn btn-primary my-3 mx-1" onClick={handleCopy}>Copy Text</button>
                        <button style={{
                            color: props.mode.btnColor,
                            background: props.mode.btnBackground,
                            border: `1px solid ${props.mode.btnBackground}`
                        }} className="btn btn-primary my-3 " onClick={handleRemoveExtraSpaces}>Remove Extra Spaces</button>
                        <button style={{
                            color: props.mode.btnColor,
                            background: props.mode.btnBackground,
                            border: `1px solid ${props.mode.btnBackground}`
                        }} className="btn btn-primary my-3 mx-1" onClick={handleClearClick}>Clear Text</button>
                    </div>
                </div>

                <div className="container my-3">
                    <h2>Your text summary</h2>
                    <p>{text.split(" ").filter((value) => { return value !== '' }).length} words and {text.length} characters</p>
                    <p>{text.split(" ").filter((value) => { return value !== '' }).length * 0.008} Minuts to read</p>
                    <h3>Preview</h3>
                    <p>{text.length > 0 ? text : 'Enter somting to text box to see priview here'}</p>
                </div>
            </div>
        </>
    )
}
