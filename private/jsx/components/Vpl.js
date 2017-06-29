import React from 'react';
import $ from 'jquery';
import NodeComponents from './Node.js';
import NodeLogic from '../Logic/node.js';
import Link from '../Logic/link.js';
import LinkComponent from './Link.js';

var LayerNode = NodeLogic.LayerNode;
var LayerNodeComponent = NodeComponents.LayerNodeComponent;
export default class extends React.Component{
    constructor(props){
        super(props);
        this.windowHeight = '800px';
        var node1 = new LayerNode({x:100, y:100}, 'Test Layer');
        var node2 = new LayerNode({x:400, y:200}, 'Test Layer');

        this.state = {
            nodes : [node1, node2],
            links : [new Link(node1, node2)],
        }
    }

    addNode(node){
       let newNodes = [
           ...this.state.nodes,
           node
       ]
       this.setState({
            nodes : newNodes,
            links: [ ...this.state.links]
       });
    }

    moveLink(){
        var newNode  = new LayerNode({x:290, y:400}, 'Another Test Layer');
        
        this.setState({ // look at this, is there any way for you to do this without 
            nodes: [... this.state.nodes],  // dealing with the whole state?
            links: [new Link(newNode, this.state.nodes[1])],
        })

    }

    render(){    
        return(
            <div className="container">
                <div className="col-md-1">
                    <button className="btn btn-default" 
                    onClick = {this.addNode.bind(this, new LayerNode({x:400, y:100}, 'Other Layer'))}>
                            Add Node
                    </button>
                    <br/>
                    <br/>
                    <button className="btn btn-default" 
                    onClick = {this.moveLink.bind(this)}>
                            Change LP
                    </button>
                </div>
                <div className="col-md-10">
                    <svg width="100%" height={'800px'} xmlns="http://www.w3.org/2000/svg">
                        
                        {this.state.nodes.map((node, index) => {
                            
                            if(node.getType() == 'LAYER'){
                                let pos = node.getPosition();
                                return (<LayerNodeComponent node={node} key={index} layerName={node.getName()} x={pos.x} y ={pos.y}/>);
                            }
                        })}
                        {
                            this.state.links.map((link, index) => {
                                console.log(link.getStartPosition(), link.getEndPosition());
                                return(<LinkComponent ref={'link_' + index} key={index} source={link.getStartPosition()} target={link.getEndPosition()} />)
                            })
                        }
                       
                    </svg>
                </div>
                <div className="col-md-1">

                </div>
            </div>
            
        );
    }
}

