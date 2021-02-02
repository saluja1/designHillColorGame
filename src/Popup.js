import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery'; 

class Popup extends React.Component {
    constructor(props){
    super(props);
    this.popupClose = this.popupClose.bind(this)
  }

  popupClose() {
    let N = $(".N").val();
    let Y = $(".Y").val();
    let Z = $(".Z").val();
    if ((N > 200 || N < 0) || (Y > Number(N*N) || Y < 0) || (Z > 5 || Z < 0)) {
      $(".errormsg").html("Please pass the valid values.");
      return false;      
    } else {
      $(".errormsg").html("");
      this.props.closePopup(N,Y,Z);
    }
  }

  render() {
    return (
      <div className='popup'>
        <div className='popup_inner'>
          <h1>{this.props.text}</h1>
          <input type="number" style={{width: "200px"}} className="N" min="0" max="200" placeholder="Number of Grid" /> 
          <input type="number" style={{width: "200px"}} className="Y" min="0" max="40000" placeholder="Number of Box" /> 
          <input type="number" style={{width: "200px"}} className="Z" min="0" max="5" placeholder="Time in seconds"/> 
          <button onClick={this.popupClose}>{this.props.btnText}</button>
          <div className="errormsg"></div>
        </div>
      </div>
    );
  }
} 

export default Popup