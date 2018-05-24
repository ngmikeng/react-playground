import User from '../components/User';
import Post from '../components/Post';
import PersonIcon from '@material-ui/icons/Person';
import ListIcon from '@material-ui/icons/List';

export default [
  {
    path: '/users',
    component: User,
    sidebarName: 'User',
    icon: PersonIcon
  },
  {
    path: '/posts',
    component: Post,
    sidebarName: 'Post',
    icon: ListIcon
  }
];