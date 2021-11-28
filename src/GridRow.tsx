import React from 'react';
import Grid from '@material-ui/core/Grid';

const GridRow = ({ rowLength }: { rowLength: number }) => {
  let arr = new Array(rowLength).fill('');
  console.log('ARR', arr);
  return (
    <Grid container direction='row'>
      {arr.map((item: any, index: number) => {
        console.log('INDEX', index);
        return (
          <Grid
            item
            style={{ width: 50, height: 50, border: '1px solid black' }}
          ></Grid>
        );
      })}
    </Grid>
  );
};

export default GridRow;
