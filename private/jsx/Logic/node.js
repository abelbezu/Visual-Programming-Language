class Node {
    constructor(position, type){
        this.position = position;
        this.type = type;
        this.getPosition = this.getPosition.bind(this);
        this.getType = this.getType.bind(this);
        this.outGoingLinks = [];
        this.incomingLinks = [];
    }

    getType(){
        return this.type;
    }

    addOutGoingLink(link){
        this.outGoingLinks.push(link);
    }

    addIncomingLink(link){
        this.incomingLinks.push(link);
    }
    // setPosition(position){
    //     this.incomingLinks.map((incomingLink) => {
    //         incomingLink.setEndPosition(position);
    //     });
    //     this.position = position;
    // }
    getPosition(){
        return {
            x: this.position.x,
            y: this.position.y
        };
    }
} 

class LayerNode extends Node{
    constructor(position, layerName){
        super(position, 'LAYER');
        this.layerName = layerName;
        this.getName = this.getName.bind(this);

    }
    getName(){
        return this.layerName;
    }
}

export default {
    LayerNode: LayerNode
   
}