import React from 'react';
import { View, FlatList, Text, TouchableOpacity, Alert } from 'react-native';
import api from '../screens/apiService';
import axios, { AxiosResponse } from 'axios';
import { DialogMenu } from './DialogMenu';

interface ListItem {
  id: number;
  title: string;
}

export function DeviceList() {

  const data: ListItem[] = [
    { id: 1, title: 'Item 1' },
    { id: 2, title: 'Item 2' },
    { id: 3, title: 'Item 3' },
    { id: 4, title: 'Item 4' },
    { id: 5, title: 'Item 5' },
  ];

  const renderListItem = (item: ListItem) => {
    return (
      <View style={{ padding: 10 }}>
        <TouchableOpacity onPress={DialogMenu} >
        <Text>{item.title}</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <FlatList
      data={data}
      renderItem={({ item }) => renderListItem(item)}
      keyExtractor={(item) => item.id.toString()}
    />
  );
};
