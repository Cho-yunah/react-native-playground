import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Home from '../screens/home';
import ReviewDtails from '../screens/reviewDetails';

const screens = {
  Home: {
    screen: Home,
  },
  ReviewDetails: {
    screen: ReviewDtails,
  },
};

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);
