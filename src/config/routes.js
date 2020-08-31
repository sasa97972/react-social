import HomeIcon from '@material-ui/icons/Home';
import MailIcon from '@material-ui/icons/Chat';
import NewsIcon from '@material-ui/icons/Forum';
import MusicIcon from '@material-ui/icons/MusicNote';
import SettingsIcon from '@material-ui/icons/Settings';

import Profile from '../components/Profile/Profile';
import Dialogs from '../components/Dialogs/Dialogs';
import Music from '../components/Music/Music';
import News from '../components/News/News';
import Settings from '../components/Settings/Settings';

export const routes = [
  {
    name: 'Profile',
    path: '/',
    exact: true,
    Component: Profile,
    Icon: HomeIcon,
  },
  {
    name: 'Messages',
    path: '/dialogs',
    exact: false,
    Component: Dialogs,
    Icon: MailIcon,
  },
  {
    name: 'News',
    path: '/news',
    exact: true,
    Component: News,
    Icon: NewsIcon,
  },
  {
    name: 'Music',
    path: '/music',
    exact: true,
    Component: Music,
    Icon: MusicIcon,
  },
  {
    name: 'Settings',
    path: '/settings',
    exact: true,
    Component: Settings,
    Icon: SettingsIcon,
  },
];
