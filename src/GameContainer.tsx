import React from 'react';
import GameGrid from './GameGrid';

const GameContainer = () => {
  const gridHeight = 5;
  const gridWidth = 5;
  return (
    <>
      <GameGrid columnLength={gridHeight} rowLength={gridWidth} />
    </>
  );
};

export default GameContainer;
