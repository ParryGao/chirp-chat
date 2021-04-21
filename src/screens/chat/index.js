import React, { useState, useEffect, useRef } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import {
  View,
  Text,
  Image,
  TextInput,
  FlatList,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import Header from 'components/header';
import Button from 'components/button';
import { COLORS, extraFooterHeight } from 'resources/global-styles';
import styles from './styles';

const ChatItem = ({ item }) => {
  if (item.flow === 'in') {
    return (
      <View style={styles.row}>
        <Image style={styles.rowAvatar} source={{ uri: item.avatar }} />
        <View style={styles.rowContent}>
          <Text style={styles.rowTitle}>{item.title}</Text>
          <View style={styles.rowLine} />
          <Text style={styles.rowMessage}>{item.msg}</Text>
          <Text style={styles.rowData}>{`${item.answer} 回答 · ${item.love} 关注`}</Text>
        </View>
        <View style={styles.rowArow} />
      </View>
    );
  }
  return (
    <View style={[styles.row, styles.rowR]}>
      <View style={[styles.rowContent, styles.rowContentR]}>
        <Text style={[styles.rowMessage, styles.rowMessageR]}>{item.msg}</Text>
      </View>
      <View style={styles.rowArowR} />
      <Image style={styles.rowAvatar} source={{ uri: item.avatar }} />
    </View>
  );
};

const Chat = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const [data, setData] = useState([]);
  const [message, setMessage] = useState();
  const listRef = useRef();

  useEffect(() => {
    setData([
      {
        id: Math.ceil(Math.random() * 10000),
        flow: 'in',
        avatar: 'avatar_two',
        title: '邀请你回答',
        msg: '在日本长期生活是中怎样的体验生活、文化差异异异在日本长期生…',
        answer: 18,
        love: 888,
      },
    ]);
  }, []);

  const sendMessage = () => {
    if (!message) {
      return;
    }
    setData(data.concat([
      {
        id: Math.ceil(Math.random() * 10000),
        flow: 'out',
        avatar: 'avatar_three',
        msg: message,
      },
    ]));

    setTimeout(() => {
      if (listRef.current) {
        listRef.current.scrollToEnd();
      }
    }, 500);

    setMessage('');
  };

  return (
    <View style={styles.contain}>
      <Header
        title={route.params.title}
        leftButtons={[
          {
            key: 'back',
            icon: 'back',
            onPress: () => navigation.goBack(),
          },
        ]}
      />
      <FlatList
        ref={listRef}
        data={data}
        renderItem={ChatItem}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
      />
      <View style={styles.chatBar}>
        <View style={styles.inputContain}>
          <TextInput
            style={styles.input}
            value={message}
            placeholder="发送消息…"
            placeholderTextColor={COLORS.TEXT_PLACEHOLDER}
            underlineColorAndroid="transparent"
            onChangeText={(text) => setMessage(text)}
            multiline
            textAlignVertical="top"
            returnKeyType="send"
            blurOnSubmit
            onSubmitEditing={sendMessage}
          />
        </View>
        <Button style={styles.sendBtn} onPress={sendMessage}>
          <Image style={styles.sendIcon} source={{ uri: 'send' }} />
        </Button>
      </View>
      {Platform.OS === 'ios' && <KeyboardAvoidingView behavior="padding" keyboardVerticalOffset={-extraFooterHeight} />}
    </View>
  );
};

export default Chat;
