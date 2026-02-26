/**
 * @file: HomeScreen.tsx
 * @description: Начальный экран приложения с полем ввода имени и кнопкой перехода
 * @dependencies: React, React Native components
 * @created: 2023.10.05
 */

import { NativeStackScreenProps } from '@react-navigation/native-stack'; // Added import for NativeStackScreenProps
import React, { useState } from 'react';
import { Button, StyleSheet, TextInput, View } from 'react-native';

type RootStackParamList = {
  HomeScreen: undefined;
  ProfileScreen: { name: string };
};

type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'HomeScreen'>;

const HomeScreen = ({ navigation }: HomeScreenProps) => {
  const [name, setName] = useState('');

  const handlePress = () => {
    navigation.navigate('ProfileScreen', { name });
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Введите ваше имя"
        value={name}
        onChangeText={setName}
        autoCapitalize="none"
      />
      <Button
        title="Продолжить"
        onPress={handlePress}
        disabled={!name.trim()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
});

export default HomeScreen;
