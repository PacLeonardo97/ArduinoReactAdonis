import React, { useState } from "react";
import clsx from "clsx";
import { Menu as MenuIcon } from '@material-ui/icons'
import { SwipeableDrawer, Button} from '@material-ui/core'
import useStyles from './styles'
import Lista from './list';

export default function SwipeableTemporaryDrawer() {
  const classes = useStyles();
  const [Drawer, setDrawer] = useState({ left: false });

  const toggleDrawer = (anchor, open) => event => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setDrawer({ ...Drawer, [anchor]: open });
  };

  const list = anchor => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom"
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <Lista />
    </div>
  );

  return (
    <div>
      {["left"].map(anchor => (
        <React.Fragment key={anchor}>
         
          <Button onClick={toggleDrawer(anchor, true)}><MenuIcon/></Button>
          <SwipeableDrawer
            anchor={anchor}
            open={Drawer[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
          
        </React.Fragment>
      ))}
    </div>
  );
}
