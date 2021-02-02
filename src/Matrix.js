import React from 'react';
import ReactDOM from 'react-dom';
import ResultPopup from './ResultPopup';
import $ from 'jquery'; 

class Matrix extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      board: this.props.board,
      colorArray: this.props.colorArray,
      resultArray: this.props.resultArray,
      showPopup: false,
      N: 0,
      Y:0,
      Z:0,
      result: "Restart"
    };
    this.handleClick = this.handleClick.bind(this)
  }


  componentDidUpdate(prevProps, prevState){
    if (this.props !== prevProps) {
        this.setState({
          board: this.props.board,
          colorArray: this.props.colorArray,
          resultArray: this.props.resultArray
        });      
    }

  }
  handleClick(col){
    let {colorArray, resultArray} = this.state
    let that = this;
    resultArray[colorArray.indexOf(String(col))] = true;
    $("#"+col).css("background-color", "transparent");
    var startTImeout =  setTimeout(function(){ 
        $("#"+col).css("background-color", "red")
        resultArray[colorArray.indexOf(String(col))] = false;
        if(resultArray.indexOf(true) == -1) {
          that.setState({
            showPopup: true,
            result: "Looser"
          });      
        }
        }, this.props.Z*1000);
      if (resultArray.indexOf(false) == -1) {
        clearTimeout(startTImeout);
          this.setState({
            showPopup: true,
            result: "Winner"
          });      
      }

  }

  render() {
    const { board, colorArray } = this.state;
    console.log(board, colorArray)
    return (
        <div>
            {board.map((row, i) => (
              <div key={i}>
                {row.map((col, j) => (
                    <div key={j} id={col} style={{height: "25px", width: "25px", display: "inline-block", border:"1px solid", backgroundColor: colorArray.indexOf(col) > -1 ? 'red': 'transparent' }} onClick={colorArray.indexOf(col) > -1 ? () => this.handleClick(col) : null} ></div>
                ))}
              </div>
            ))}

           {this.state.showPopup ? 
              <ResultPopup
                text={this.state.result}/>
              : null
            }
        </div>
    );
  }
}

export default Matrix;