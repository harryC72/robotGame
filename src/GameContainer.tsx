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
import { v4 as uuidv4 } from 'uuid';

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
  const [wallArr, setWallArr] = React.useState<{ x: number; y: number }[]>([]);
  const gridHeight = 5;
  const gridWidth = 5;

  React.useEffect(() => {
    if (yValRobot && xValRobot) {
      if (
        yValWall &&
        yValWall === yValRobot &&
        xValWall &&
        xValWall === xValRobot
      )
        return;

      setInsertRobot({
        x: xValRobot - 1,
        y: yValRobot - 1,
      });
    }
  }, [yValRobot, xValRobot, yValWall, xValWall]);

  React.useEffect(() => {
    if (yValWall && xValWall) {
      if (
        yValRobot &&
        yValWall === yValRobot &&
        xValRobot &&
        xValWall === xValRobot
      )
        return;
      setInsertWall({
        x: xValWall - 1,
        y: yValWall - 1,
      });
      setWallArr((oldArray) => [
        ...oldArray,
        {
          x: xValWall - 1,
          y: yValWall - 1,
        },
      ]);
      setYValWall(undefined);
      setXValWall(undefined);
    }
  }, [yValWall, xValWall, yValRobot, xValRobot]);

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
