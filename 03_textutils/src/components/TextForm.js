import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        // console.log("UpperCase was Clicked"+ text)
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to Uppercase","success")
    }
  
    const handleDownClick = ()=>{
        // console.log("UpperCase was Clicked"+ text)
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to Lowercase","success")
    }

    const handleOnChange = (event)=>{
    //     console.log("On change")
        setText(event.target.value)
        
    }

    const handleCopy=()=>{
        // console.log("I am Copy");
        // var text = document.getElementById("myBox");
        // text.select();
        navigator.clipboard.writeText(text);
        document.getSelection().removeAllRanges();
        props.showAlert("Copied to ClipBoard!", "success")
    }

    const handleClearClick = () =>{
        let newText = ""
        setText(newText)
        props.showAlert("Text Cleared","success")
    }

    const handlefirstClick = () =>{
        let words = text.split(' ');
        for (let i=0; i < words.length; i++){
            words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase();
        };
            let newText = words.join(' ')
            setText(newText)
            props.showAlert("Converted First Letter of Each Word to UpperCase","success")
    }


    

    const[text, setText] = useState("");
    // setText("Enter Text here2");
    return (
        <>
            <div className='container' style={{color: props.mode === 'dark'?'white':'black'}}>
                <h1 className="mb-2">{props.heading}</h1>
                <div className="mb-3">
                
                <textarea className="form-control" value={text} style={{backgroundColor: props.mode === 'dark' ? '#13466e' : 'white', color: props.mode === 'dark' ? 'white' : 'black',}} onChange={handleOnChange} id="myBox" rows="8"></textarea>
                </div>
                
                <button disabled={text.length===0} className="button btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert To UpperCase</button>        
                <button disabled={text.length===0} className="button btn btn-primary mx-1 my-1" onClick={handleDownClick}>Convert To LowerCase</button>    
                <button disabled={text.length===0} className="button btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear Text</button>    
                <button disabled={text.length===0} className="button btn btn-primary mx-1 my-1" onClick={handlefirstClick}>Convert 1st Letter to Up.Case</button>    
                <button disabled={text.length===0} className="button btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>    
                    

            </div>
            <div className="container my-3" style={{color: props.mode === 'dark'?'white':'black'}}>
                <h2>Your Text Summary</h2>
                <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Words, {text.length} Characters and {text.split(". ").length - 1} Sentences</p>
                <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0.}).length} Minutes Read</p>
                <h2>Preview</h2>
                <p>{text.length>0?text:"Nothing to preview "}</p>
            </div>
            </>
    )
}

