import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
      backgroundImage: `linear-gradient(#cfd9df,#e2ebf0)`,
      color: 'grey',
    },
    bigAvatar: {
      margin: 30,
      width: 100,
      height: 100,
    },
  }));

function SideMenu() {
    const classes = useStyles();

    return (
        <Drawer
            open={true}
            variant='permanent'
            anchor='left'
            className={classes.drawer}
            classes={{
            paper: classes.drawerPaper,
            }}
        >
        </Drawer>
    )
}

export default SideMenu;