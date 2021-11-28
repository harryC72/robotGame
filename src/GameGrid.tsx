import React from 'react';
import GridRow from './GridRow';
import Robot from './Robot';

const GameGrid = ({
  rowLength,
  columnLength,
  insert,
}: {
  rowLength: number;
  columnLength: number;
  insert?: { y: number; x: number };
}) => {
  let arr = new Array(columnLength).fill('');

  return (
    <>
      {arr.map((item: any, index: number) => {
        if (index === insert?.y) {
          return <GridRow rowLength={rowLength} insert={insert.x} />;
        } else {
          return <GridRow rowLength={rowLength} />;
        }
      })}
    </>
  );
};

export default GameGrid;
