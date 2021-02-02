import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery'; 

class ResultPopup extends React.Component {
  render() {
    return (
      <div className='popup'>
        <div className='popup_inner'>
         	<h1>{this.props.text}</h1>
        </div>
      </div>
    );
  }
} 

export default ResultPopup