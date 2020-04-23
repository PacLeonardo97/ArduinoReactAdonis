import React, { memo } from 'react';
import { List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core'
import { Adb as AndroidIcon, Add as AddIcon, Person as PersonIcon} from '@material-ui/icons';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Lista = () => {
  const selector = useSelector(store => store.session.payload);
  const Logged = selector.length > 0;

  const history = useHistory();
  const array = [{
      text:'Login',
      url: '/login',
      Icon: <PersonIcon />,
      Logged: !Logged
    }, {
      text: 'Arduino',
      url: '/Arduino',
      Icon: <AndroidIcon />,
      Logged
     }, {
      text: 'TodoList',
      url: '/todo',
      Icon: <AddIcon />,
      Logged
    }];

    return (
        <List>
            {array.map(({ text, url, Icon, Logged }) => (
                
                <ListItem button key={text} style={{display: !Logged && 'none'}} >
                    <ListItemIcon>
                        {Icon}
                    </ListItemIcon>
                    <ListItemText primary={text} onClick={() => history.push(url)} />
                </ListItem>
            ))}
        </List>
    )
}

export default memo(Lista);