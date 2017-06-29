import React from 'react';
export default class extends React.Component{

    render(){
        return(
        <div className = "rectContainer">
            <p>
                clientX: <span id ={"clientX"} >0</span>
                <br></br>
                
                clientY: <span id ={"clientY"} >0</span>
                <br></br>
                <br></br>
                pageX: <span id ={"pageX"} >0</span>
                <br></br>
                pageY: <span id ={"pageY"} >0</span>
                <br></br>
                <br></br>
                screenX: <span id ={"screenX"} >0</span>
                <br></br>
                screenY: <span id ={"screenY"} >0</span>
                <br></br>
            </p>
            <p>
                CurrentVals
                <br></br>
                x: <span id ={"currentX"} >0</span>
                <br></br>
                y: <span id ={"currentY"} >0</span>
            </p>
        </div>
        );
    }
}
