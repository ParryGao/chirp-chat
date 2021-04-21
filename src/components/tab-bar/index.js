import React from 'react';
import { View } from 'react-native';
import TabItem from './tab-item';
import styles from './styles';

const TabBar = ({ state, descriptors, navigation }) => {
  console.log('navigation state:::', state, '  descriptors:::', descriptors);
  return (
    <View style={styles.tabBar}>
      {
        state.routes.map((route, index) => {
          const {
            name,
            key,
          } = route;
          const params = route.params || {};
          return (
            <TabItem
              selected={state.index === index}
              icon={params.icon}
              title={params.title}
              onPress={() => {
                navigation.navigate(name);
              }}
              key={key}
            />
          );
        })
      }
    </View>
  );
};

export default TabBar;
