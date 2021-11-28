import React from 'react';
import GridRow from './GridRow';

const GameGrid = ({
  rowLength,
  columnLength,
}: {
  rowLength: number;
  columnLength: number;
}) => {
  let arr = new Array(columnLength).fill('');

  return (
    <>
      {arr.map((item: any, index: number) => {
        console.log('INDEX', index);
        return <GridRow rowLength={rowLength} />;
      })}
    </>
  );
};

export default GameGrid;
