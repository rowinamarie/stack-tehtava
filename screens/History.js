import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

export default function History({ vastaukset }) {  //vastaukset tulevat propseina
  return (
    <View style={styles.container}>
    <Text>History</Text>
    <FlatList
      data={vastaukset}
      renderItem={({ item }) => <Text>{item.key}</Text>}
      ListEmptyComponent={<Text>No data</Text>}
      ItemSeparatorComponent={
        <View
          style={{ height: 1, backgroundColor: 'grey', width: 100 }}>
        </View>}
    />
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontSize: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
