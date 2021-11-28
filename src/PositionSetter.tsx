import {
  Typography,
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
  Grid,
} from '@material-ui/core';
import React, { ChangeEvent } from 'react';

const PositionSetter = ({
  heading,
  setX,
  setY,
  xVal,
  yVal,
}: {
  heading: string;
  setX: (event: ChangeEvent<HTMLInputElement>) => void;
  setY: (event: ChangeEvent<HTMLInputElement>) => void;
  xVal: number | undefined;
  yVal: number | undefined;
}) => {
  return (
    <Grid
      container
      direction='column'
      justifyContent='center'
      alignItems='center'
      style={{ padding: 20 }}
    >
      <Typography>{heading}</Typography>
      <div style={{ border: '2px solid black', padding: 20, width: '20%' }}>
        <Typography>Position X</Typography>
        <FormControl component='fieldset'>
          <RadioGroup
            name='radio-buttons-group'
            style={{ display: 'flex', flexDirection: 'row' }}
            value={xVal}
            onChange={setX}
          >
            <FormControlLabel value='1' control={<Radio />} label='1' />
            <FormControlLabel value='2' control={<Radio />} label='2' />
            <FormControlLabel value='3' control={<Radio />} label='3' />{' '}
            <FormControlLabel value='4' control={<Radio />} label='4' />{' '}
            <FormControlLabel value='5' control={<Radio />} label='5' />
          </RadioGroup>
        </FormControl>
        <Typography>Position Y</Typography>
        <FormControl component='fieldset'>
          <RadioGroup
            name='radio-buttons-group'
            style={{ display: 'flex', flexDirection: 'row' }}
            value={yVal}
            onChange={setY}
          >
            <FormControlLabel value='5' control={<Radio />} label='1' />
            <FormControlLabel value='4' control={<Radio />} label='2' />
            <FormControlLabel value='3' control={<Radio />} label='3' />{' '}
            <FormControlLabel value='2' control={<Radio />} label='4' />{' '}
            <FormControlLabel value='1' control={<Radio />} label='5' />
          </RadioGroup>
        </FormControl>
      </div>
    </Grid>
  );
};

export default PositionSetter;
