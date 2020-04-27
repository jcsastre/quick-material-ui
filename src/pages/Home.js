import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import TopMenu from '../components/TopMenu';
import SideMenu from '../components/SideMenu';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
}));

const Home = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <TopMenu />
      <SideMenu />
    </div>
  );
}

export default Home;