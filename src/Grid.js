import React, { Component } from 'react';
import './index.css';
import Box from './Box';


class Grid extends Component {
  render() {
      const width = (this.props.cols * 14);
      let rowsArr = [];

      let boxClass = '';
      for(let i = 0; i < this.props.rows; i++) {
          for(let j = 0; j < this.props.cols; j++) {
              //create unique Id for each box
            let boxId = `${i} _ ${j}`;

            //check if specific box is true (and turn on) or false (and turn off)
            boxClass = this.props.gridFull[i][j] ? "box on" : "box off";
            rowsArr.push(
                <Box 
                  boxId={boxId}
                  key={boxId}
                  boxClass={boxClass}
                  row={i}
                  col={j}
                  selectBox={this.props.selectBox}
                />
            );
          }
      }

    return (
      <div className="grid" style={{width: width}}>
        {rowsArr}
      </div>
    )
  }
}

export default Grid;
