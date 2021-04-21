import React from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  View,
  Text,
  Image,
  FlatList,
} from 'react-native';
import Header from 'components/header';
import Button from 'components/button';
import { px } from 'helpers/px';
import styles from './styles';

const MessageItem = ({ item, onPress }) => (
  <Button style={styles.row} onPress={onPress}>
    <Image style={styles.rowAvatar} source={{ uri: item.avatar }} />
    <View style={styles.rowContent}>
      <Text style={styles.rowName}>{item.name}</Text>
      <Text style={styles.rowMessage}>{item.message}</Text>
    </View>
    <Text style={styles.rowTime}>{item.time}</Text>
  </Button>
);

const Message = () => {
  const navigation = useNavigation();

  const funcs = [
    {
      key: 'love',
      title: '获赞和收藏',
      icon: 'love',
      onPress: () => {},
    },
    {
      key: 'chat',
      title: '评论和@',
      icon: 'chat',
      onPress: () => {},
    },
    {
      key: 'account',
      title: '新增关注',
      icon: 'account',
      onPress: () => {},
    },
  ];

  const sessions = [
    {
      id: 'notication',
      avatar: 'message',
      name: '推送消息',
      message: '亲爱的喳同学，你好！令人激动的春节…',
      time: '10:30',
    },
    {
      id: 'system',
      avatar: 'email',
      name: '系统通知',
      message: '亲爱的喳同学，你好！令人激动的春节…',
      time: '10:30',
    },
    {
      id: 'steward',
      avatar: 'mine',
      name: '喳管家',
      message: '亲爱的喳同学，你好！令人激动的春节…',
      time: '10:30',
    },
    {
      id: 'userid',
      avatar: 'avatar',
      name: '东京小丸子',
      message: '亲爱的喳同学，你好！令人激动的春节…',
      time: '10:30',
    },
  ];

  const renderItem = ({ item }) => (
    <MessageItem item={item} onPress={() => navigation.navigate('Chat', { title: item.name })} />
  );

  return (
    <View style={styles.contain}>
      <Header
        title="喳·喳"
        rightButtons={[
          {
            key: 'bubble',
            icon: 'bubble',
            onPress: () => {},
          },
        ]}
      />
      <View style={styles.sectionView}>
        {
          funcs.map((item) => (
            <Button style={styles.sectionItem} onPress={item.onPress} key={item.key}>
              <Image style={styles.sectionItemIcon} source={{ uri: item.icon }} />
              <Text style={styles.sectionItemText}>{item.title}</Text>
            </Button>
          ))
        }
      </View>
      <FlatList
        data={sessions}
        renderItem={renderItem}
        getItemLayout={(_, index) => (
          { length: px(77), offset: px(77) * index, index }
        )}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default Message;
