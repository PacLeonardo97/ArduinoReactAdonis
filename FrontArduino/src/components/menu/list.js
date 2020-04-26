import React, { memo } from 'react';
import { List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core'
import { Adb as AndroidIcon, Add as AddIcon, Person as PersonIcon} from '@material-ui/icons';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Lista = () => {
  const selector = useSelector(store => store.session.payload?.token?.token);
  const history = useHistory();
  const Logged = !selector?.length > 0;
  
  const array = [{
      text:'Login',
      url: '/login',
      Icon: <PersonIcon />,
      Logged
    },{
      text:'Registrar',
      url: '/registrar',
      Icon: <PersonIcon />,
      Logged
    }, {
      text: 'Arduino',
      url: '/Arduino',
      Icon: <AndroidIcon />,
     }, {
      text: 'TodoList',
      url: '/todo',
      Icon: <AddIcon />,
    }, {
      text: 'TodoListaPI',
      url: '/todoApi',
      Icon: <AddIcon />,
    }];

    return (
        <List>
            {array.map(({ text, url, Icon, Logged }) => (
                
                <ListItem button key={text} style={{display: typeof Logged !== 'undefined' && 'none'}} onClick={() => history.push(url)} >
                      <ListItemIcon>
                        {Icon}
                    </ListItemIcon>
                    <ListItemText primary={text} />
                </ListItem>
            ))}
        </List>
    )
}

export default memo(Lista);