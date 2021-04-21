import React from 'react';
import {
  View,
  Text,
  Image,
} from 'react-native';
import Button from 'components/button';
import styles from './styles';

const Header = ({
  title,
  leftButtons = [],
  rightButtons = [],
}) => (
  <View style={styles.header}>
    <View style={styles.buttons}>
      {
        leftButtons.map((item) => (
          <Button style={styles.button} onPress={item.onPress} disabled={item.disabled} key={item.key}>
            {item.title && <Text style={[styles.buttonTitle, item.disabled ? styles.buttonTitleDisabled : null]}>{item.title}</Text>}
            {item.icon && <Image style={[styles.buttonIcon, item.style]} source={{ uri: item.icon }} />}
          </Button>
        ))
      }
    </View>
    <Text style={styles.title}>{title}</Text>
    <View style={[styles.buttons, styles.right]}>
      {
        rightButtons.map((item) => (
          <Button style={[styles.button, styles.buttonR]} onPress={item.onPress} disabled={item.disabled} key={item.key}>
            {item.title && <Text style={[styles.buttonTitle, item.disabled ? styles.buttonTitleDisabled : null]}>{item.title}</Text>}
            {item.icon && <Image style={styles.buttonIcon} source={{ uri: item.icon }} />}
          </Button>
        ))
      }
    </View>
  </View>
);

export default Header;
