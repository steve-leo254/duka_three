import { useState } from 'react';
import { MenuItem } from '../../routes/sitemap';
import Link from '@mui/material/Link';
import List from '@mui/material/List';
import Collapse from '@mui/material/Collapse';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import IconifyIcon from '../IconifyIcon'; 

const CollapseListItem = ({ subheader, active, items, icon }: MenuItem) => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <>
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          {icon && (
            <IconifyIcon
              icon={icon}
              sx={{
                color: active ? 'primary.main' : null,
              }}
            />
          )}
        </ListItemIcon>
        <ListItemText
          primary={subheader}
          sx={{
            '& .MuiListItemText-primary': {
              color: active ? 'primary.main' : null,
            },
          }}
        />
        <IconifyIcon
          icon="iconamoon:arrow-right-2-duotone"
          color="neutral.dark"
          sx={{
            transform: open ? 'rotate(90deg)' : 'rotate(0deg)',
            transition: 'transform 0.2s ease-in-out',
          }}
        />
      </ListItemButton>

      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {items?.map((link) => (
            <ListItemButton
              key={link.pathName}
              component={Link}
              href={link.path}
              sx={{
                pl: 1.75,
                borderLeft: 4,
                borderStyle: 'solid',
                borderColor: link.active ? 'primary.main' : 'transparent !important',
                bgcolor: link.active ? 'info.dark' : 'info.darker',
              }}
            >
              <ListItemText
                primary={link.name}
                sx={{
                  '& .MuiListItemText-primary': {
                    color: link.active ? 'text.primary' : 'text.secondary',
                  },
                }}
              />
            </ListItemButton>
          ))}
        </List>
      </Collapse>
    </>
  );
};

export default CollapseListItem;
