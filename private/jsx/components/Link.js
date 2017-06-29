import React from 'react';
import $ from 'jquery';

export default class extends React.Component{
    constructor(props){
        super(props);

        this.color = 'black';
        this.stokeWidth = '2px';
        this.clickHandler = this.clickHandler.bind(this);
        this.ref = props.refVal;
        
    }

    moveSource(position){
       
    }

    moveTarget(position){
        
    }

    changeColor(color){

    }
    destroy(){

    }
    clickHandler(){
        console.log(this.refs.firstLink);
        
    }

    diagonal(source, target) {
        return "M" + source.x + "," + source.y
            + "C" + (source.x + target.x) / 2 + "," + source.y
            + " " + (source.x + target.x) / 2 + "," + target.y
            + " " + target.x + "," + target.y;
    }

    render(){
        return (<path ref = {this.ref}
            onClick = {this.clickHandler}
            d={this.diagonal(this.props.source, this.props.target)}
            stroke={this.color}
            strokeWidth = {this.strokeWidth}
            fill= 'transparent'/>);
    }
}