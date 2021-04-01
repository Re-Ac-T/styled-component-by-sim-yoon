import React from 'react';
import Rating from '@material-ui/lab/Rating';
import { makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components';

const RatingBlock = styled.div`
    margin: auto;
`;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    '& > * + *': {
      marginTop: theme.spacing(1),
    },
  },
}));

export default function HalfRating( { num } ) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <RatingBlock>
          <Rating name="half-rating" defaultValue={num/2.0} precision={0.1} />
      </RatingBlock>
    </div>
  );
}
