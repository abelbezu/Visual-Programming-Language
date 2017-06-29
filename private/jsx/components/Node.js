import React from 'react';
import $ from 'jquery';

class LayerNodeComponent extends React.Component{
  constructor(props){
    super(props);
    this.width = 200;
    this.height = 100;
    this.style = {
      rx: '2px',
      ry: '2px'
    }

    this.outputLinks = [];

    
    this.dp = {
      dragging: false,
      currentX: 0,
      currentY: 0

    }

    this.logicalNode = this.props.node;

    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.handleMouseUp   = this.handleMouseUp.bind(this);
    this.handleMouseMove = this.handleMouseMove.bind(this);

  }

  handleMouseDown(event){
    this.dp.currentX = event.clientX;
    this.dp.currentY = event.clientY;
    this.dp.dragging = true;    
  }

  handleMouseUp(){

    this.dp.dragging = false;  
   
  }




  handleMouseMove(event){
    
    var elX = parseInt($(event.target).attr('x'));
    var elY = parseInt($(event.target).attr('y'));

    if(this.dp.dragging){

      var dx =   event.clientX - this.dp.currentX  + (elX? elX : 0 );
      var dy =   event.clientY - this.dp.currentY  + (elY? elY : 0 );
      
      this.dp.currentX = event.clientX;
      this.dp.currentY = event.clientY;
      $(event.target).attr('x', dx);
      $(event.target).attr('y', dy);
    
    //   let oldLink = this.props.links[0];
    //   oldLink.setStartPosition({x: dx, y: dy});
    //   this.props.links[0] = oldLink;



    }
  }

  render(){
    return (
      <rect 
        onMouseUp = {this.handleMouseUp}
        onMouseDown = {this.handleMouseDown}
        onMouseMove = {this.handleMouseMove}
        x = {this.props.x}
        y = {this.props.y}
        width={this.width} height={this.height} style = {this.style}/>
    );
  }
}

const mapStateToProps = state => {
    return {
        links: state.links, 
    };
}

export default {
    LayerNodeComponent: LayerNodeComponent,
};

// export default connect(mapStateToProps)(LayerNodeComponent);



/* ****************************************************************************************************
                                
                                    OTHER TYPES OF NODES

******************************************************************************************************/



// class MultipleInputNode extends React.Component{
//   constructor(props){
//     super(props);
//     this.width = 200;
//     this.height = 100;
//     this.style = {
//       fill: '#ecf0f1',
//       rx: '2px',
//       ry: '2px'
//     }

//     this.outputLinks = [];


//     this.dp = {
//       dragging: false,
//       currentX: 0,
//       currentY: 0
//     }


//     this.handleMouseDown = this.handleMouseDown.bind(this);
//     this.handleMouseUp   = this.handleMouseUp.bind(this);
//     this.handleMouseMove = this.handleMouseMove.bind(this);

//   }

//   handleMouseDown(event){
//     this.dp.currentX = event.clientX;
//     this.dp.currentY = event.clientY;
//     this.dp.dragging = true;    
//   }

//   handleMouseUp(){

//     this.dp.dragging = false;  
   
//   }

//   addOutputLink(link){
//       this.outputLinks.push(link);
//   }



//   handleMouseMove(event){
    
//     var elX = parseInt($(event.target).attr('x'));
//     var elY = parseInt($(event.target).attr('y'));

//     if(this.dp.dragging){

//       var dx =   event.clientX - this.dp.currentX  + (elX? elX : 0 );
//       var dy =   event.clientY - this.dp.currentY  + (elY? elY : 0 );
      
//       this.dp.currentX = event.clientX;
//       this.dp.currentY = event.clientY;
//       $(event.target).attr('x', dx);
//       $(event.target).attr('y', dy);

    


 
//     }
//   }

//   render(){
      
//     return (
//       <rect 
//         onMouseUp = {this.handleMouseUp}
//         onMouseDown = {this.handleMouseDown}
//         onMouseMove = {this.handleMouseMove}
//         width={this.width} height={this.height} style = {this.style}/>
//     );
//   }
// }

