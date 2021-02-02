import React from 'react';
import ReactDOM from 'react-dom';
import Matrix from './Matrix';
import Popup from './Popup';

class Game extends React.Component {
    constructor() {
        super();
        this.state = {
            showPopup: true,
            N: 0,
            Y:0,
            Z:0,
            colorArray: []
        }
    }

  createarray1(rowCount, colCount){
    let myarr = [];
    let colorArray = [];
    let resultArray = [];
    function getRanArr(lngth) {
      let arr = [];
      do {
          let ran = Math.floor(Math.random() * (rowCount*colCount)); 
          arr = arr.indexOf(ran) > -1 ? arr : arr.concat(ran);
       }while (arr.length < lngth)       
       return arr;
    }

    const randomValueArray = getRanArr(this.state.Y);

    randomValueArray.sort(function(a, b){
        return a - b;
    })

    console.log(randomValueArray)
    let counter = 0;
    for(let i=1; i <= rowCount; i++){
      let row = []
      for(var j=1; j <= colCount; j++){
        row.push(i+"_"+j);
        console.log(randomValueArray.indexOf(counter));
        if (randomValueArray.indexOf(counter) != -1) {
          colorArray.push(i+"_"+Number(j));
          resultArray.push(false);          
        }
        counter++
      }
      myarr.push(row);
    }
    return [myarr, colorArray, resultArray];

  }

  togglePopup(N, Y, Z) {
    this.setState({
      showPopup: false,
      N: N,
      Y:Y,
      Z:Z
    });
  }

  render() {
    let matrixData =  this.createarray1(this.state.N,this.state.N)
    console.log(matrixData)
    let matrixArray = matrixData[0];
    let colorArray = matrixData[1];
    let resultArray = matrixData[2];

    return (
      <div>
       {this.state.showPopup ? 
          <Popup
            text='Color Game' btnText='Start'
            closePopup={this.togglePopup.bind(this)}
          />
          : null
        }
        <Matrix board={matrixArray} resultArray={resultArray} colorArray={colorArray} N={this.state.N} Y={this.state.Y} Z={this.state.Z}/>
      </div>
    );
  }
}

export default Game;
