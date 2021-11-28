import { Grid } from '@material-ui/core';
import React from 'react';
import GridRow from './GridRow';
import Robot from './Robot';

const GameGrid = ({
  rowLength,
  columnLength,
  insertRobot,
  insertWall,
}: {
  rowLength: number;
  columnLength: number;
  insertRobot?: { y: number; x: number };
  insertWall?: { y: number; x: number };
}) => {
  let arr = new Array(columnLength).fill('');

  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div>
        {arr.map((item: any, index: number) => {
          if (index === insertRobot?.y && index !== insertWall?.y) {
            return (
              <GridRow rowLength={rowLength} insertRobot={insertRobot.x} />
            );
          } else if (index === insertWall?.y && index !== insertRobot?.y) {
            <GridRow rowLength={rowLength} insertWall={insertWall.x} />;
          } else {
            return <GridRow rowLength={rowLength} />;
          }
        })}
      </div>
    </div>
  );
};

export default GameGrid;
