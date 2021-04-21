import React from 'react';
import { TouchableOpacity, Image, Text } from 'react-native';
import styles from './styles';

const TabItem = ({
  title,
  icon,
  selected,
  onPress,
}) => (
  <TouchableOpacity style={styles.tabItem} onPress={onPress}>
    <Image style={styles.tabItemIcon} source={{ uri: selected ? `${icon}` : icon }} />
    <Text style={[styles.tabItemText, selected ? styles.tabItemTextSelect : null]}>{title}</Text>
  </TouchableOpacity>
);

export default TabItem;
