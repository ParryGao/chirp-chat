import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import TabBar from 'components/tab-bar';

/**
 * routing
 */
import Daily from 'screens/daily';
import FAQs from 'screens/faqs';
import Activity from 'screens/activity';
import Message from 'screens/message';
import Mine from 'screens/mine';
import Chat from 'screens/chat';

/**
 * nav config
 */
const stackConfig = {
  headerMode: 'none',
  navigationOptions: {
    header: null,
    cardStack: {
      gesturesEnabled: true,
    },
  },
};

const tabConfig = {
  tabBarComponent: TabBar,
  tabBarPosition: 'bottom',
  swipeEnabled: false,
  animationEnabled: false,
  lazy: true,
};

const Tab = createBottomTabNavigator();
const mainTab = () => (
  <Tab.Navigator
    tabBar={(props) => <tabConfig.tabBarComponent {...props} />}
    initialRouteName="Chat"
    tabBarOptions={{
      tabBarPosition: tabConfig.tabBarPosition,
    }}
  >
    <Tab.Screen
      name="Daily"
      component={Daily}
      initialParams={{
        icon: 'bubble',
        title: '喳·日常',
      }}
    />
    <Tab.Screen
      name="FAQs"
      component={FAQs}
      initialParams={{
        icon: 'bubble',
        title: '喳·问答',
      }}
    />
    <Tab.Screen
      name="Activity"
      component={Activity}
      initialParams={{
        icon: 'bubble',
        title: '喳·活动',
      }}
    />
    <Tab.Screen
      name="Message"
      component={Message}
      initialParams={{
        icon: 'bubble',
        title: '喳·喳',
      }}
    />
    <Tab.Screen
      name="Mine"
      component={Mine}
      initialParams={{
        icon: 'bubble',
        title: '我的',
      }}
    />
  </Tab.Navigator>
);

const MainStack = createStackNavigator();
const MainNavigator = ({ defaultRoute }) => (
  <MainStack.Navigator
    headerMode={stackConfig.headerMode}
    screenOptions={stackConfig.navigationOptions}
    initialRouteName={defaultRoute}
  >
    <MainStack.Screen
      name="Main"
      component={mainTab}
    />
    <MainStack.Screen
      name="Chat"
      component={Chat}
    />
  </MainStack.Navigator>
);

export const getDefaultRoute = () => 'Main';

export default MainNavigator;
