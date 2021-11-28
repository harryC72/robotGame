import React from 'react';
import Grid from '@material-ui/core/Grid';
import Robot from './Robot';
import Wall from './Wall';

const GridRow = ({
  rowLength,
  insertRobot,
  insertWall,
}: {
  rowLength: number;
  insertRobot?: number;
  insertWall?: number;
}) => {
  let arr = new Array(rowLength).fill('');

  console.log('ARR IN GRIDROW', arr);
  return (
    <Grid container direction='row'>
      {arr.map((item: any, index: number) => {
        if (index === insertRobot) {
          return (
            <Grid
              item
              style={{
                width: 50,
                height: 50,
                border: '1px solid black',
              }}
            >
              <Robot />
            </Grid>
          );
        } else if (index === insertWall) {
          return (
            <Grid
              item
              style={{
                width: 50,
                height: 50,
                border: '1px solid black',
              }}
            >
              <Wall />
            </Grid>
          );
        } else {
          return (
            <Grid
              item
              style={{ width: 50, height: 50, border: '1px solid black' }}
            >
              {item}
            </Grid>
          );
        }
      })}
    </Grid>
  );
};

export default GridRow;
