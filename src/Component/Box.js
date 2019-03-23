import React, { Component } from "react";



class Box extends Component {
  Champion=()=>{
    return(
    document.getElementById('nom').innerHTML=this.props.nom,
    document.getElementById('contenue').innerHTML=this.props.contenue,
    document.getElementById('img').src=this.props.image)

}
  
  
  render() {
    
      

    return (
      <div className="Box">
      <button onClick={this.Champion}>{this.props.nom} </button>
      </div>
    );
  }
}
export default Box;
