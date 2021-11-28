import React from 'react';
import GameGrid from './GameGrid';

const GameContainer = () => {
  const gridHeight = 5;
  const gridWidth = 5;
  const insert = { y: 3, x: 4 };
  return (
    <>
      <GameGrid
        columnLength={gridHeight}
        rowLength={gridWidth}
        insert={insert}
      />
    </>
  );
};

export default GameContainer;
