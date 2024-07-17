import { MenuItem } from '../../routes/sitemap';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import ListItemButton from '@mui/material/ListItemButton';
import avatar from '../../assets/images/avatar.png';

const ProfileListItem = ({ subheader, path }: MenuItem) => {
  return (
    <ListItemButton component={Link} href={path}>
      <Stack spacing={1} alignItems="center">
        <Avatar src={avatar} sx={{ height: 37, width: 36, bgcolor: 'primary.main' }} />
        <Stack direction="column">
          <Typography variant="subtitle2" color="text.primary" letterSpacing={0.5}>
            {subheader}
          </Typography>
          <Typography variant="caption" color="text.secondary" fontWeight={400}>
            Account Settings
          </Typography>
        </Stack>
      </Stack>
    </ListItemButton>
  );
};

export default ProfileListItem;
