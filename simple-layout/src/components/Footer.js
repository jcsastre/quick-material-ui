import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
    appBar: {
        top: 'auto',
        bottom: 0,
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
      },
      menuButton: {
        marginRight: theme.spacing(2),
      },
      title: {
        flexGrow: 1,
        marginLeft: 10,
      },
      footer: {
        marginLeft: 20,
        fontSize: 17,
      },
  }));

const drawerWidth = 240;

function SideMenu() {
    const classes = useStyles();

   

    return (
        <AppBar position='fixed' className={classes.appBar}>
            <Typography variant='h6' className={classes.footer}>
                © Copyright 2019
            </Typography>
        </AppBar>
    )
}

export default SideMenu;
