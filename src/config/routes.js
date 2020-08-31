import HomeIcon from '@material-ui/icons/Home';
import MailIcon from '@material-ui/icons/Chat';
import NewsIcon from '@material-ui/icons/Forum';
import MusicIcon from '@material-ui/icons/MusicNote';
import SettingsIcon from '@material-ui/icons/Settings';

import Profile from '../components/Profile/Profile';
import Dialogs from '../components/Dialogs/Dialogs';

export const routes = [
  {
    name: 'Profile',
    path: '/',
    Component: Profile,
    Icon: HomeIcon,
  },
  {
    name: 'Messages',
    path: '/dialogs',
    Component: Dialogs,
    Icon: MailIcon,
  },
  {
    name: 'News',
    path: null,
    Component: null,
    Icon: NewsIcon,
  },
  {
    name: 'Music',
    path: null,
    Component: null,
    Icon: MusicIcon,
  },
  {
    name: 'Settings',
    path: null,
    Component: null,
    Icon: SettingsIcon,
  },
];
