import React from 'react';
import {
  TouchableOpacity,
} from 'react-native';

const Button = ({
  onPress,
  style,
  children,
  disabled = false,
}) => (
  <TouchableOpacity style={[{ overflow: 'hidden' }, style]} onPress={onPress} activeOpacity={0.7} disabled={disabled}>
    {children}
  </TouchableOpacity>
);

export default Button;
