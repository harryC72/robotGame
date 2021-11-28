import * as React from 'react';
import {
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Typography,
} from '@material-ui/core';
import GameGrid from './GameGrid';
import PositionSetter from './PositionSetter';

const GameContainer = () => {
  const [yValRobot, setYValRobot] = React.useState<number | undefined>();
  const [xValRobot, setXValRobot] = React.useState<number | undefined>();
  const [yValWall, setYValWall] = React.useState<number | undefined>();
  const [xValWall, setXValWall] = React.useState<number | undefined>();
  const [insertRobot, setInsertRobot] = React.useState<
    { x: number; y: number } | undefined
  >();
  const [insertWall, setInsertWall] = React.useState<
    { x: number; y: number } | undefined
  >();
  const gridHeight = 5;
  const gridWidth = 5;

  React.useEffect(() => {
    if (yValRobot && xValRobot) {
      setInsertRobot({
        x: xValRobot - 1,
        y: yValRobot - 1,
      });
    }
  }, [yValRobot, xValRobot]);

  React.useEffect(() => {
    if (yValWall && xValWall) {
      setInsertWall({
        x: xValWall - 1,
        y: yValWall - 1,
      });
    }
  }, [yValWall, xValWall]);

  const setYRobot = (event: React.ChangeEvent<HTMLInputElement>) => {
    setYValRobot(parseInt(event.target.value));
  };

  const setXRobot = (event: React.ChangeEvent<HTMLInputElement>) => {
    setXValRobot(parseInt(event.target.value));
  };

  const setYWall = (event: React.ChangeEvent<HTMLInputElement>) => {
    setYValWall(parseInt(event.target.value));
  };

  const setXWall = (event: React.ChangeEvent<HTMLInputElement>) => {
    setXValWall(parseInt(event.target.value));
  };
  return (
    <>
      <PositionSetter
        heading='Set position Robot'
        setX={setXRobot}
        xVal={xValRobot}
        setY={setYRobot}
        yVal={yValRobot}
      />
      <PositionSetter
        heading='Set position Wall'
        setX={setXWall}
        xVal={xValWall}
        setY={setYWall}
        yVal={yValWall}
      />

      <GameGrid
        columnLength={gridHeight}
        rowLength={gridWidth}
        insertRobot={insertRobot}
        insertWall={insertWall}
      />
    </>
  );
};

export default GameContainer;
