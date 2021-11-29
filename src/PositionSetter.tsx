import {
  Typography,
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
  Grid,
  TextField,
  Button,
} from '@material-ui/core';
import React, { ChangeEvent } from 'react';

const PositionSetter = ({
  heading,
  setX,
  setY,
}: {
  heading: string;
  setX: (event: ChangeEvent<HTMLInputElement>) => void;
  setY: (event: ChangeEvent<HTMLInputElement>) => void;
  xVal: number | undefined;
  yVal: number | undefined;
}) => {
  const [x, setLocalX] = React.useState('');
  const [y, setLocalY] = React.useState('');

  const handleX = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLocalX(event.target.value);
    setX(event);
  };

  const handleY = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLocalY(event.target.value);
    setY(event);
  };
  return (
    <Grid
      container
      direction='column'
      justifyContent='center'
      alignItems='center'
      style={{ padding: 20 }}
    >
      <div
        style={{
          border: '2px solid black',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: 20,
          width: '20%',
        }}
      >
        <Typography>{heading}</Typography>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            border: '2px solid black',
            padding: 20,
            width: '20%',
          }}
        >
          <Typography>Position X</Typography>
          <TextField type='text' value={x} onChange={handleX} />

          <Typography>Position Y</Typography>
          <TextField type='text' value={y} onChange={handleY} />
        </div>
        <Button
          onClick={() => {
            setLocalY('');
            setLocalX('');
          }}
        >
          Clear
        </Button>
      </div>
    </Grid>
  );
};

export default PositionSetter;
