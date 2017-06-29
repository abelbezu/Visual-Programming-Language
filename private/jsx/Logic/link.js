class Link {
    constructor(sourceNode, targetNode){
        this.sourceNode = sourceNode;
        this.targetNode = targetNode;
        this.startPosition = sourceNode.getPosition();
        this.endPosition   = sourceNode.getPosition();
        this.getStartPosition = this.getStartPosition.bind(this);
        this.getEndPosition = this.getEndPosition.bind(this);
    }

    getStartPosition(){
        var sourcePos = this.sourceNode.getPosition();
        return {
            x : sourcePos.x + 200, // TODO: get rid of this magic numbers
            y : sourcePos.y + 15,
        };
    }

    setStartPosition(position){
            this.startPosition = {
                x : position.x + 200,
                y : position.y + 15
            }
    }
    setEndPosition(position){
            this.endPosition = {
                x : position.x,
                y : position.y + 15
            }
    }

    getEndPosition(){
        var targetPos = this.targetNode.getPosition();
        if(this.targetNode.getType() =='LAYER'){
            return {
                x : targetPos.x,
                y : targetPos.y + 15,
            };
        }
    }
    

}

export default Link;