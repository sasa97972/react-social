import HomeIcon from '@material-ui/icons/Home';
import MailIcon from '@material-ui/icons/Chat';
import NewsIcon from '@material-ui/icons/Forum';
import MusicIcon from '@material-ui/icons/MusicNote';
import SettingsIcon from '@material-ui/icons/Settings';

export const menuWidth = 270;

export const menuItems = [
  {
    name: 'Profile',
    Icon: HomeIcon,
    href: '/',
  },
  {
    name: 'Messages',
    Icon: MailIcon,
    href: '/dialogs',
  },
  {
    name: 'News',
    Icon: NewsIcon,
  },
  {
    name: 'Music',
    Icon: MusicIcon,
  },
  {
    name: 'Settings',
    Icon: SettingsIcon,
  },
];
